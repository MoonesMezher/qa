const Report = require('../database/models/Report');
const Notefication = require('../database/models/Notefication');
const User = require('../database/models/User');
const Question = require('../database/models/Question');
const Category = require('../database/models/Category');
const { default: mongoose } = require('mongoose');
const passwordHash = require('password-hash');
const Profile = require('../database/models/Profile');
const Section = require('../database/models/Section');

const deleteAllNotificationsAndReports = async (req, res) => {
    try {
        await Report.deleteMany({});
        await Notefication.deleteMany({});

        return res.status(200).json({state: 'success', message: 'Deleted all successfully'})
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message})        
    }
}

const addOtherCategoryToQuestionNoHaveCategory = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ state: 'failed', message: 'Invalid Id' });
    }

    let OtherId;

    const total = await Question.countDocuments({ category_ids: [] });

    const totalTheSameSection = await Question.countDocuments({ category_ids: [], section_id: id });

    const findOtherCategory = await Category.findOne({ name: 'Other', section_id: id });

    if(!findOtherCategory) {
        const createdCategory = await Category.create({ name: 'Other', section_id: id, picture: 'uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg'});

        OtherId = createdCategory._id;
    } else {
        OtherId = findOtherCategory._id;
    }

    try {
        // , { category_ids: [OtherId] }
        const qs = await Question.find({ category_ids: [], section_id: id }).limit(10);

        await Promise.all(qs.map(async e => {
            await Question.findByIdAndUpdate(e._id, { category_ids: [OtherId] });
        }));

        return res.status(200).json({ state: 'success', message: 'Updated questions successfully', total, totalTheSameSection })
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message });
    }
}

const editAdminPassword = async (req, res) => {
    const { pass } = req.body;

    if(!pass) {
        return res.status(400).json({ state: 'failed', message: 'Password cannot be empty' });
    }

    if(typeof pass !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'Password must be string' });
    }

    const hash = passwordHash.generate(pass);

    if(!hash) {
        return res.status(400).json({ state: 'failed', message: 'Password not hashed' });
    }
    
    const admin = await User.findOne({ role: 'admin', email: 'admin@admin.com' });

    if(!admin) {
        return res.status(400).json({ state: 'failed', message: 'This user not found' });
    }

    try {
        admin.password = hash;

        await admin.save();

        return res.status(200).json({ state: 'success', message: 'Updated password successfully', admin, pass, hashed: admin.password });
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message });        
    }
}

const createProfileToUser = async (req, res) => {
    const { user_id } = req.body

    if(!user_id) {
        return res.status(400).json({ state: 'failed', message: 'You must insert user id'})
    }

    if(!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ state: 'failed', message: 'User id does not valid'})
    }

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state: 'failed', message: 'This user not found to make profile'})
    }

    try {
        const profile = await Profile.findOne({user_id});

        if(profile) {
            return res.status(400).json({ state: 'failed', message: 'This user already has profile'})
        }

        await Profile.create({user_id});

        return res.status(200).json({ state: 'success', message: 'Created profile successfully' })
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message})        
    }
}

const moveCategoryToAnotherSection = async (req, res) => {
    const { id } = req.params;

    const { section_id } = req.body;

    const category = await Category.findById(id);

    if(!category) {
        return res.status(400).json({ state: 'failed', message: 'This category does not exist'})        
    }

    if(!section_id) {
        return res.status(400).json({ state: 'failed', message: 'Section Id must be exist'})        
    }

    const section = await Section.findById(section_id);

    if(!section) {
        return res.status(400).json({ state: 'failed', message: 'This section does not exist'})        
    }

    if(!mongoose.Types.ObjectId.isValid(section_id)) {
        return res.status(400).json({ state: 'failed', message: 'Section Id does not valid'})        
    }

    try {
        const questions = await Question.find({ category_ids: { $in: id }});

        console.log(questions);

        await Category.findByIdAndUpdate(id, { section_id })
        
        Promise.all(questions.map(async q => {
            console.log(q);
            await Question.findByIdAndUpdate(q._id, { section_id });
        }))

        return res.status(200).json({ state: 'success', message: 'Updated questions successfully'})        
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message })        
    }
}

const deleteAllNotActiveDataEntry = async (req, res) => {
    try {
        await User.deleteMany({ role: 'data-entry', active: false });

        return res.status(200).json({ state: 'success', message: 'Deleted all not active data entries successfully'});
    } catch (err) {
        return res.status(400).json({ state: 'failed', message: err.message })                
    }
}

const deleteAllDataEntry = async (req, res) => {
    try {
        await User.deleteMany({ role: 'data-entry'});

        return res.status(200).json({ state: 'success', message: 'Deleted all data entries successfully'});
    } catch (err) {
        return res.status(400).json({ state: 'failed', message: err.message })                
    }
}

module.exports = {
    addOtherCategoryToQuestionNoHaveCategory,
    editAdminPassword,
    deleteAllNotificationsAndReports,
    createProfileToUser,
    moveCategoryToAnotherSection,
    deleteAllNotActiveDataEntry,
    deleteAllDataEntry
}