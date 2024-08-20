const { default: mongoose } = require("mongoose");
const Competition = require("../database/models/Competition");
const moment = require("moment");
const Section = require("../database/models/Section");
const Category = require("../database/models/Category");
const Profile = require("../database/models/Profile");
const { toDate } = require("validator");
const { deleteImages } = require("../middlewares/checkFromImageMiddleware");
const User = require("../database/models/User");

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
    const { startDate, endDate, name, prizeOne, prizeTwo, prizeThree, picture, typeId } = req.body;

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

    if(!prizeOne) {
        wrongInputs.push('prizeOne');
    }

    if(!prizeTwo) {
        wrongInputs.push('prizeTwo');
    }

    if(!prizeThree) {
        wrongInputs.push('prizeThree');
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

    if(typeof prizeOne !== 'string') {
        return res.status(400).json({state: 'failed', message: 'PrizeOne must be string' })
    }

    if(typeof prizeTwo !== 'string') {
        return res.status(400).json({state: 'failed', message: 'PrizeTwo must be string' })
    }

    if(typeof prizeThree !== 'string') {
        return res.status(400).json({state: 'failed', message: 'PrizeThree must be string' })
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
        await Competition.create({ endDate, startDate, name, prizeOne, prizeTwo, prizeThree, picture, type_id: typeId });

        return res.status(200).json({state: 'success', message: 'Created competition successfully' })
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })
    }
}

const updateCompetition = async (req, res) => {
    const { startDate, endDate, name, prizeOne, prizeTwo, prizeThree, picture, typeId } = req.body;

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

    if(!prizeOne) {
        wrongInputs.push('prizeOne');
    }

    if(!prizeTwo) {
        wrongInputs.push('prizeTwo');
    }

    if(!prizeThree) {
        wrongInputs.push('prizeThree');
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

    if(typeof prizeOne !== 'string') {
        return res.status(400).json({state: 'failed', message: 'PrizeOne must be string' })
    }

    if(typeof prizeTwo !== 'string') {
        return res.status(400).json({state: 'failed', message: 'PrizeTwo must be string' })
    }

    if(typeof prizeThree !== 'string') {
        return res.status(400).json({state: 'failed', message: 'PrizeThree must be string' })
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
        const competition = await Competition.findByIdAndUpdate(id,{ startDate, endDate, name, prizeOne, prizeTwo, prizeThree, picture, type_id: typeId }, { new: true });
        
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

const getAllTypesToCompetions = async (req, res) => {
    try {
        const sections = await Section.find({});

        const categories = await Category.find({});

        let data = [...sections, ...categories];

        data = data.map(e => {
            return { id: e._id, name: e.name } 
        });

        data = data.filter(e => e.name !== 'Other')

        return res.status(200).json({state: 'success', message: 'Get all sections and categories to competions', data})
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })                
    }
}

const changeExpByCompetions = async (req, res) => {
    const userId = req.user._id;

    const { competitionId, exp } = req.body;

    if(!competitionId) {
        return res.status(400).json({state: 'failed', message: 'CompetionId must be inserted' })
    }

    if(!exp) {
        return res.status(400).json({state: 'failed', message: 'Exp must be inserted' })
    }

    if(typeof exp !== 'number') {
        return res.status(400).json({state: 'failed', message: 'Exp must be number' })
    }

    if(!mongoose.Types.ObjectId.isValid(competitionId)) {
        return res.status(400).json({state: 'failed', message: 'CompetionId must be a valid ID' })
    }

    try {
        const competition = await Competition.findById(competitionId);

        if(!competition) {
            return res.status(400).json({state: 'failed', message: 'This competion does not exist'})
        }

        const users = competition.users.map(e => {
            if(e.user_id.toString() === userId.toString()) {
                return { user_id: e.user_id, exp: e.exp + exp }
            }
            return e
        })

        competition.users = users;

        await competition.save();

        const profile = await Profile.findOne({ user_id: userId });

        profile.exp = profile.exp + exp;

        await profile.save();

        return res.status(200).json({state: 'success', message: 'Change exp of user by competition successfully'})
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })                
    }
}

const getStoredUsersToCompetition = async (req, res) => {
    try {
        const { id } = req.params;

        const competion = await Competition.findById(id);

        if(!competion) {
            return res.status(400).json({state: 'failed', message: 'This competion does not exist' })
        }

        const users = competion.users.sort((a, b) => b.exp - a.exp);

        const data = await Promise.all(users.map( async (e) => {
            const user = await User.findById(e.user_id);

            if(user) {
                const profile = await Profile.findOne({ user_id: e.user_id })

                return {
                    _id: e.user_id,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    verified: user.verified,
                    active: user.active,
                    isFree: user.isFree,
                    picture: profile?.picture,
                    expInCompetion: e?.exp
                }
            }
        }
        ))

        return res.status(200).json({state: 'success', message: 'Get stored users by competion id successfully', data })
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })                        
    }
}

const getCompetionsDataToUser = async (req, res) => {
    try {
        const { id } = req.params;

        const competions = await Competition.find({
            users: { $elemMatch: { user_id: id } }
        });

        const data = await Promise.all(competions.map(async (e) => {
            const user = e.users.find(e => e.user_id.toString() === id.toString())

            const exp = user.exp;

            let level;

            const users = e.users.sort((a, b) => b.exp - a.exp);

            users.forEach((e, i) => {
                if(e.user_id.toString() === id.toString()) {
                    level = i+1;
                }
            })

            return {
                id: e._id,
                name: e.name,
                startDate: e.startDate,
                endDate: e.endDate,
                userExp: exp,
                userLevel: level,
            }
        }));

        return res.status(200).json({state: 'success', message: 'Get competions info to user successfully', data })        
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
    topUsersInCompetions,
    getAllTypesToCompetions,
    changeExpByCompetions,
    getStoredUsersToCompetition,
    getCompetionsDataToUser
}