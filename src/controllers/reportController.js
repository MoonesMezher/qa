const { default: mongoose } = require("mongoose");

const Report = require("../database/models/Report");
const Notefication = require("../database/models/Notefication");
const FcmToken = require("../database/models/FcmToken");
const { admin, sendNotification } = require("../services/firebase/notefications");
const Question = require("../database/models/Question");
const User = require("../database/models/User");

const limit = 50;

const createReport = async (req, res) => {
    const { question_id, text, user_id } = req.body;

    if(!text) {
        return res.status(400).json({ state: 'failed', message: 'Text can not be empty' });      
    }

    if(!user_id) {
        return res.status(400).json({ state: 'failed', message: 'User Id can not be empty' });      
    }

    if(!question_id) {
        return res.status(400).json({ state: 'failed', message: 'Question Id can not be empty' });      
    }

    if(!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ state: 'failed', message: 'User Id must be valid'});      
    }

    if(!mongoose.Types.ObjectId.isValid(question_id)) {
        return res.status(400).json({ state: 'failed', message: 'Question Id must be valid'});      
    }

    if(typeof text !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'Text must be string'});      
    }

    const question = await Question.findById(question_id);

    if(!question) {
        return res.status(400).json({ state: 'failed', message: 'Question Id does not exist in questions'});      
    }

    try {
        const notefication = await Notefication.create({ title: 'User make a report on question', body: text });

        const report = await Report.create( { text, user_id, question_id } );
        // Send a notification to the user who made the report
        const { fcmTokens } = await FcmToken.findOne( { role: 'admin' } );

        const findUser = await User.findById(user_id);

        const newReport = { ...report._doc, username: findUser.username};

        fcmTokens.map(async (fcmToken) => {
            await sendNotification({ fcmToken: fcmToken,
                title: 'User make a report on question',
                body: text,
                data: {
                    state: 'success', 
                    message: 'Created report successfully',
                    report: JSON.stringify(newReport),
                    notification: JSON.stringify({
                        '_id': `${notefication._id}`,
                        'createdAt': `${notefication.createdAt}`,
                        'updatedAt': `${notefication.updatedAt}`,
                        '__v': `${notefication.__v}` 
                    }),
                }
            });
        })

        return res.status(200).json({ state: 'success', message: 'Created report successfully' });
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message});      
    }
};

const getReports = async (req, res) => {
    const { page } = req.params;

    try {
        const count = await Report.countDocuments( {} );

        const reports = await Report.find( {} ).skip((page - 1) * limit).limit(limit).lean();

        const newReports = await Promise.all(reports.map(async (report) => {
            const findUser = await User.findById(report.user_id);
            return {...report, username: findUser.username };
        }));

        return res.status(200).json({ state: 'success', message: 'Get reports successfully', newReports, total: count});
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message});      
    }
};

const getReport = async (req, res) => {
    const { id } = req.params;

    try {
        const report = await Report.findById(id);

        if(!report) {
            return res.status(400).json({ state: 'failed', message: 'This report does not exist'});      
        }

        const findUser = await User.findById(report.user_id);

        return res.status(200).json({ state: 'success', message: 'Get report successfully', report, username: findUser.username});
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message});      
    }
};

const readReport = async (req, res) => {
    const { id } = req.params;

    try {
        const report = await Report.findById(id);

        if(!report) {
            return res.status(400).json({ state: 'failed', message: 'This report doesnot exist' });      
        }

        await Report.findByIdAndUpdate(id, { read: true });

        return res.status(200).json({ state: 'success', message: 'Read report successfully', report});
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message});      
    }
};

const replayReport = async (req, res) => {
    const { id } = req.params;

    const { title, body } = req.body;

    if(!title) {
        return res.status(400).json({ state: 'failed', message: 'Title can not be an empty' });      
    }

    if(!body) {
        return res.status(400).json({ state: 'failed', message: 'Body cannot be an empty'});      
    }

    if(typeof body !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'Body must be string'});      
    }

    if(typeof title !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'Title must be string'});      
    }

    try {
        const report = await Report.findById(id);

        if(!report) {
            return res.status(400).json({ state: 'failed', message: 'This report doesnot exist' });      
        }

        const notefication = await Notefication.create({ title, body });

        // Send a notification to the user who made the report
        const tokens = await FcmToken.findOne( { user_id: report.user_id } );

        if(!tokens) {
            return res.status(400).json({ state: 'failed', message: 'This user does not have permission to send notification'});      
        }

        const { fcmTokens } = tokens;

        const findUser = await User.findById(report.user_id);

        const newReport = {...report, username: findUser?.username };

        if (fcmTokens && fcmTokens?.length > 0) {
            await sendNotification({
                fcmToken: fcmTokens,
                title,
                body,
                data: {
                    state: 'success', 
                    message: 'Replay to report successfully',
                    report: JSON.stringify(newReport),
                    notification: JSON.stringify({
                        '_id': `${notefication._id}`,
                        'createdAt': `${notefication.createdAt}`,
                        'updatedAt': `${notefication.updatedAt}`,
                        '__v': `${notefication.__v}` 
                    }),
                }
            });
        }

        return res.status(200).json({ state: 'success', message: 'Replay to report successfully'});
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message});      
    }
};

module.exports = {
    createReport,
    readReport,
    replayReport,
    getReports,
    getReport
}