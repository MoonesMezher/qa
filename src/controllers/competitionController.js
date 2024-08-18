const { default: mongoose } = require("mongoose");
const Competition = require("../database/models/Competition");
const moment = require("moment");
const Section = require("../database/models/Section");
const Category = require("../database/models/Category");
const { toDate } = require("validator");
const { deleteImages } = require("../middlewares/checkFromImageMiddleware");

const getAllCompetitions = async (req, res) => {
    const userId = req.user._id;

    try {
        let competitions = await Competition.find({});

        competitions = await Promise.all(competitions.map(async (e, i) => {
            if(toDate(e.startDate).getTime() <= new Date().getTime()) {
                e.state = 'started'
            } 
            
            if(toDate(e.endDate).getTime() < new Date().getTime()) {
                e.state = 'finished'
            } 

            await e.save()

            const isFind = e.users.find(user => user.user_id.toString() === userId.toString());

            if(isFind) {
                return {...e._doc, me: 'مشترك'}
            } else {
                return {...e._doc, me: 'غير مشترك'}
            }
        }));

        return res.status(200).json({state: 'success', message: 'Get all competitions successfully', competitions})
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })
    } 
}

const createCompetition = async (req, res) => {
    const { startDate, endDate, name, description, picture, typeId } = req.body;

    const wrongInputs = [];

    if(!startDate) {
        wrongInputs.push('startDate');
    }

    if(!endDate) {
        wrongInputs.push('endDate');
    }

    if(!name) {
        wrongInputs.push('name');
    }

    if(!description) {
        wrongInputs.push('description');
    }

    if(!picture) {
        wrongInputs.push('picture');
    }

    if(!typeId) {
        wrongInputs.push('typeId');
    }

    if(wrongInputs.length > 0) {
        return res.status(400).json({state: 'failed', message: 'Some data can not be empty', wrongInputs })
    }

    if(typeof name !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Name must be string' })
    }

    if(typeof description !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Description must be string' })
    }

    if(typeof picture !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Picture must be string' })
    }
    
    if(!mongoose.Types.ObjectId.isValid(typeId)) {
        return res.status(400).json({state: 'failed', message: 'TypeId must be a valid ID' })
    }

    const startDateMoment = moment(startDate, 'YYYY-MM-DD');

    if (!startDateMoment.isValid()) {
        return res.status(400).json({state: 'failed', message: 'StartDate must be a valid Date' })
    }

    const endDateMoment = moment(endDate, 'YYYY-MM-DD');
    
    if (!endDateMoment.isValid()) {
        return res.status(400).json({state: 'failed', message: 'EndDate must be a valid Date' })
    }

    const section = await Section.findById(typeId);
    
    if(!section) {
        const category = await Category.findById(typeId);

        if(!category) {
            return res.status(400).json({state: 'failed', message: 'TypeID must be a refference id to existed section or category' })
        }
    }

    if(toDate(startDate).getTime() > toDate(endDate).getTime()) {
        return res.status(400).json({state: 'failed', message: 'EndDate must be bigger than StartDate' })
    }

    try {
        await Competition.create({ endDate, startDate, name, description, picture, type_id: typeId });

        return res.status(200).json({state: 'success', message: 'Created competition successfully' })
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })
    }
}

const updateCompetition = async (req, res) => {
    const { startDate, endDate, name, description, picture, typeId } = req.body;

    const { id } = req.params;

    const existCompetition = await Competition.findById(id);

    if(!existCompetition) {
        return res.status(400).json({state: 'failed', message: 'This competition does not exist' })
    }

    const wrongInputs = [];

    if(!startDate) {
        wrongInputs.push('startDate');
    }

    if(!endDate) {
        wrongInputs.push('endDate');
    }

    if(!name) {
        wrongInputs.push('name');
    }

    if(!description) {
        wrongInputs.push('description');
    }

    if(!picture) {
        wrongInputs.push('picture');
    }

    if(!typeId) {
        wrongInputs.push('typeId');
    }

    if(wrongInputs.length > 0) {
        return res.status(400).json({state: 'failed', message: 'Some data can not be empty', wrongInputs })
    }

    if(typeof name !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Name must be string' })
    }

    if(typeof description !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Description must be string' })
    }

    if(typeof picture !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Picture must be string' })
    }
    
    if(!mongoose.Types.ObjectId.isValid(typeId)) {
        return res.status(400).json({state: 'failed', message: 'TypeId must be a valid ID' })
    }

    const startDateMoment = moment(startDate, 'YYYY-MM-DD');

    if (!startDateMoment.isValid()) {
        return res.status(400).json({state: 'failed', message: 'StartDate must be a valid Date' })
    }

    const endDateMoment = moment(endDate, 'YYYY-MM-DD');
    
    if (!endDateMoment.isValid()) {
        return res.status(400).json({state: 'failed', message: 'EndDate must be a valid Date' })
    }

    if(toDate(startDate).getTime() > toDate(endDate).getTime()) {
        return res.status(400).json({state: 'failed', message: 'EndDate must be bigger than StartDate' })
    }

    const section = await Section.findById(typeId);
    
    if(!section) {
        const category = await Category.findById(typeId);

        if(!category) {
            return res.status(400).json({state: 'failed', message: 'TypeID must be a refference id to existed section or category' })
        }
    }

    try {
        const competition = await Competition.findByIdAndUpdate(id,{ endDate, startDate, name, description, picture, type_id: typeId }, { new: true });
        
        return res.status(200).json({state: 'success', message: 'Updated competition successfully', competition})
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })
    }
}

const joinUser = async (req, res) => {
    const { id } = req.params;

    const user_id = req.user._id;

    const existCompetition = await Competition.findById(id);

    if(!existCompetition) {
        return res.status(400).json({state: 'failed', message: 'This competition does not exist' })
    }

    const NOW = new Date();

    if(NOW.getTime() > toDate(existCompetition.endDate)?.getTime()) {
        return res.status(400).json({state: 'failed', message: 'The end date to this competition is finished' })
    }

    try {
        const userIsExist = await Competition.countDocuments({
            users: { $elemMatch: { user_id } }
        });

        if(userIsExist > 0) {
            return res.status(400).json({state: 'failed', message: 'You already joined to the competition' })        
        }

        await existCompetition.users.push({
            user_id,
            exp: 0
        });

        await existCompetition.save();

        return res.status(200).json({state: 'success', message: 'Joind to the competiton successfully' })        
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })        
    }
}

const deleteCompetition = async (req, res) => {
    const { id } = req.params;

    try {
        const competition = await Competition.findById(id);

        if(!competition) {
            return res.status(400).json({state: 'failed', message: 'This competition does not exist' })
        }

        deleteImages('competitions',competition.picture)

        await Competition.findByIdAndDelete(id);

        return res.status(200).json({state: 'success', message: 'Delete competition successfully'})
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })
    } 
}

const topUsersInCompetions = async (req, res) => {
    const { id } = req.params;

    const competition = await Competition.findById(id);

    if(!competition) {
        return res.status(400).json({state: 'failed', message: 'This competition does not exist' })
    }

    // if(toDate(competition.endDate).getTime() > new Date().getTime()) {

    // }

    try {
        const users = competition.users.sort((a, b) => b.exp - a.exp).slice(0, 3);        

        return res.status(200).json({state: 'success', message: 'Get top three users in this competition successfully', users})
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })        
    }
}


module.exports = {
    getAllCompetitions,
    createCompetition,
    updateCompetition,
    deleteCompetition,
    joinUser,
    topUsersInCompetions
}