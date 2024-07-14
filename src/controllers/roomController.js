const { default: mongoose } = require("mongoose");
const Category = require("../database/models/Category");
const Section = require("../database/models/Section");
const Room = require("../database/models/Room");
const User = require("../database/models/User");
const { generateRandomQuestionsForOnlineGame } = require("../helpers/generateRandomQuestions");
const Profile = require("../database/models/Profile");
const userJson = require("../helpers/handleUserJson");

const joinToRoom = async (req, res) => {
    const { type, subject } = req.body;

    const userId = req.user._id;

    if(!subject) {
        return res.status(400).json({ state: 'failed', message: 'Subject cannot be empty' });
    }

    if(!userId) {
        return res.status(400).json({ state: 'failed', message: 'UserId cannot be empty' });
    }

    if(!mongoose.Types.ObjectId.isValid(subject)) {
        return res.status(400).json({ state: 'failed', message: 'Subject must be a valid Id' });
    }

    if(!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ state:'failed', message: 'UserId must be valid Id' });
    }

    if(type === 'section') {
        const section = await Section.findById(subject)

        if(!section) {
            return res.status(400).json({ state:'failed', message: 'This subject doesnot exist in the section' });
        }
    } else if(type === 'category') {
        const category = await Category.findById(subject);

        if(!category) {
            return res.status(400).json({ state:'failed', message: 'This subject doesnot exist in the category' });
        }
    }

    const user = await User.findById(userId);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'This user doesnot exist' });
    }

    const profile = await Profile.findOne({ user_id: user._id });

    if(!profile) {
        return res.status(400).json({ state:'failed', message: 'This user doesnot have a profile' });
    }

    const findRoom = await Room.findOne({ users: { $elemMatch: { id: user._id } } });

    if(findRoom) {
        return res.status(400).json({ state:'failed', message: 'You cannot join to room before you leave your room now' });
    }

    try {
        const room = await Room.findOne({ type: 'Online', subject: subject, users: { $size: 1 }, gameState: 'waiting', _id: { $ne: user._id } });

        if(room) {
            room.users.push( { id: user._id, name: user.username, image: profile.picture, status: 'ready' } );

            room.users[0].status = 'ready';

            room.gameState = 'ready';

            await room.save();

            const data = {
                id: room._id,
                gameState: room.gameState,
                players: userJson(room.users),
                questions: room.questions,
                subject: room.subject,
            }

            return res.status(200).json({ state:'success', message: 'تم انضمام المستخدم الى غرفة بنجاح', data });
        } else {
            const questions = await generateRandomQuestionsForOnlineGame({ id: subject, type });

            if(questions.length === 0) {
                return res.status(400).json({ state:'failed', message: 'لا يوجد اسئلة تناسب خيارك لذلك لا يمكنك اللعب الآن' });
            }

            const newRoom = await Room.create({ type: 'Online',users: [{ id: user._id, name: user.username, image: profile.picture, status: 'waiting' }], gameState: 'waiting', subject });

            newRoom.questions = questions;

            await newRoom.save();

            const data = {
                id: newRoom._id,
                gameState: newRoom.gameState,
                players: userJson(newRoom.users),
                questions: newRoom.questions,
                subject: newRoom.subject,
            }

            return res.status(200).json({ state:'success', message: 'تم انشاء غرفة جديدة بنجاح', data });
        }
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const deleteAllRooms = async (req, res) => {
    try {
        await Room.deleteMany({});

        return res.status(200).json({ state:'success', message: 'تم حذف جميع الغرف بنجاح' });        
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });        
    }
}

module.exports = {
    joinToRoom,
    deleteAllRooms,
}