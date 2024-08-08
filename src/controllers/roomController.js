const { default: mongoose } = require("mongoose");
const Category = require("../database/models/Category");
const Section = require("../database/models/Section");
const Room = require("../database/models/Room");
const User = require("../database/models/User");
const { generateRandomQuestionsForOnlineGame } = require("../helpers/generateRandomQuestions");
const Profile = require("../database/models/Profile");
const userJson = require("../helpers/handleUserJson");
const Notefication = require("../database/models/Notefication");
const FcmToken = require("../database/models/FcmToken");
const { sendNotification } = require("../services/firebase/notefications");
const Invite = require("../database/models/Invite");
const userJsonToGroupGame = require("../helpers/handleUserJsonToGroupGame");

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
        return res.status(400).json({ state:'failed', message: 'عذراً لا يمكنك الانضمام الآن حاول مرة أخرى' });
    }

    try {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

        await Room.deleteMany({ createdAt: { $lt: tenMinutesAgo } });

        const room = await Room.findOne({ invite: false, type: 'Online', subject: subject, users: { $size: 1 }, gameState: 'waiting', _id: { $ne: user._id } });

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

const createNewRoomInGroupGame = async (req, res) => {
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
        return res.status(400).json({ state:'failed', message: 'عذراً لا يمكنك الانضمام الآن حاول مرة أخرى' });
    }

    try {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

        await Room.deleteMany({ createdAt: { $lt: tenMinutesAgo } });

        const questions = await generateRandomQuestionsForOnlineGame({ id: subject, type });

        if(questions.length === 0) {
            return res.status(400).json({ state:'failed', message: 'لا يوجد اسئلة تناسب خيارك لذلك لا يمكنك اللعب الآن' });
        }

        const newRoom = await Room.create({ invite: true, type: 'Group',users: [{ id: user._id, name: user.username, image: profile.picture, status: 'ready', admin: true }], gameState: 'ready', subject });

        newRoom.questions = questions;

        await newRoom.save();

        const data = {
            id: newRoom._id,
            gameState: newRoom.gameState,
            players: userJsonToGroupGame(newRoom.users),
            questions: newRoom.questions,
            subject: newRoom.subject,
        }

        return res.status(200).json({ state:'success', message: 'تم انشاء غرفة جديدة بنجاح', data });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const createNewRoomInOnlineGame = async (req, res) => {
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
        return res.status(400).json({ state:'failed', message: 'عذراً لا يمكنك الانضمام الآن حاول مرة أخرى' });
    }

    try {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

        await Room.deleteMany({ createdAt: { $lt: tenMinutesAgo } });

        const questions = await generateRandomQuestionsForOnlineGame({ id: subject, type });

        if(questions.length === 0) {
            return res.status(400).json({ state:'failed', message: 'لا يوجد اسئلة تناسب خيارك لذلك لا يمكنك اللعب الآن' });
        }

        const newRoom = await Room.create({ invite: true, type: 'Online',users: [{ id: user._id, name: user.username, image: profile.picture, status: 'ready' }], gameState: 'waiting', subject });

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
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const joinToRoomInGroupGame = async (req, res) => {
    const { roomId } = req.params;

    const userId = req.user._id;

    if(!roomId) {
        return res.status(400).json({ state:'failed', message: 'يجب ادخال كود اللعبة المراد الانضمام اليها في الحقل' });
    }

    if(!mongoose.Types.ObjectId.isValid(roomId)) {
        return res.status(400).json({ state:'failed', message: 'هذا الكود غير صحيح' });
    }

    const roomExist = await Room.findOne({_id: roomId, type: "Group"});

    if(!roomExist) {
        return res.status(400).json({ state:'failed', message: 'عذرا لا يوجد لعبة تملك هذا الكود' });
    }

    const user = await User.findById(userId);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'This user does not found' });
    }

    const profile = await Profile.findOne({ user_id: userId });

    if(!profile) {
        return res.status(400).json({ state:'failed', message: 'This user does not have a profile' });
    }

    const findRoom = await Room.findOne({ users: { $elemMatch: { id: user._id } } });

    if(findRoom) {
        return res.status(400).json({ state:'failed', message: 'عذراً لا يمكنك الانضمام الآن حاول مرة أخرى' });
    }

    try {
        const room = await Room.findOne({ _id: roomId, type: 'Group'});

        if(room.users.length >= 13) {
            return res.status(400).json({ state:'failed', message: 'لا يمكنك الانضمام فاللعبة تحوي العدد الأعظمي من اللاعبين المتاح' });        
        }

        if(room.gameState === 'start') {
            return res.status(400).json({ state:'failed', message: 'عذرا هذه اللعبة بدأت للتو ولا يمكنك الانضمام اليها' });        
        }

        room.users.push({ id: user._id, name: user.username, image: profile.picture, status: 'ready' });

        await room.save();
        
        if(room.users.length >= 3) {
            room.gameState = 'ready';

            await room.save();
        }

        const data = {
            id: room._id,
            gameState: room.gameState,
            players: userJsonToGroupGame(room.users),
            questions: room.questions,
            subject: room.subject,
        }

        return res.status(200).json({ state:'success', message: 'تم الانضمام الى غرفة جديدة بنجاح', data });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });        
    }
}

const joinToRoomInOnlineGame = async (req, res) => {
    const { roomId } = req.params;

    const userId = req.user._id;

    if(!roomId) {
        return res.status(400).json({ state:'failed', message: 'يجب ادخال كود اللعبة المراد الانضمام اليها في الحقل' });
    }

    if(!mongoose.Types.ObjectId.isValid(roomId)) {
        return res.status(400).json({ state:'failed', message: 'هذا الكود غير صحيح' });
    }

    const roomExist = await Room.findOne({_id: roomId, type: "Online"});

    if(!roomExist) {
        return res.status(400).json({ state:'failed', message: 'عذرا لا يوجد لعبة تملك هذا الكود' });
    }

    const user = await User.findById(userId);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'This user does not found' });
    }

    const profile = await Profile.findOne({ user_id: userId });

    if(!profile) {
        return res.status(400).json({ state:'failed', message: 'This user does not have a profile' });
    }

    const findRoom = await Room.findOne({ users: { $elemMatch: { id: user._id } } });

    if(findRoom) {
        return res.status(400).json({ state:'failed', message: 'عذراً لا يمكنك الانضمام الآن حاول مرة أخرى' });
    }

    try {
        const room = await Room.findOne({ _id: roomId, type: 'Online'});

        if(room.users.length >= 2) {
            return res.status(400).json({ state:'failed', message: 'لا يمكنك الانضمام فاللعبة تحوي العدد الأعظمي من اللاعبين المتاح' });        
        }

        room.users.push({ id: user._id, name: user.username, image: profile.picture, status: 'ready' });

        room.gameState = 'ready';

        await room.save();

        const data = {
            id: room._id,
            gameState: room.gameState,
            players: userJson(room.users),
            questions: room.questions,
            subject: room.subject,
        }

        return res.status(200).json({ state:'success', message: 'تم الانضمام الى غرفة جديدة بنجاح', data });
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

const makeAnInviteToGame = async (req, res) => {
    const { roomId, users, type } = req.body;

    const userId = req.user._id;

    if(!roomId) {
        return res.status(400).json({ state:'failed', message: 'يجب ادخال كود اللعبة المراد الانضمام اليها في الحقل' });
    }

    if(!type) {
        return res.status(400).json({ state:'failed', message: 'Type must be inserted' });
    }

    if(type !== 'online' && type !== 'group') {
        return res.status(400).json({ state:'failed', message: 'Type must be (online, or group)' });
    }

    if(!mongoose.Types.ObjectId.isValid(roomId)) {
        return res.status(400).json({ state:'failed', message: 'هذا الكود غير صحيح' });
    }

    const roomExist = await Room.findOne({ _id: roomId });

    if(!roomExist) {
        return res.status(400).json({ state:'failed', message: 'عذرا لا يوجد لعبة تملك هذا الكود' });
    }

    if(!users) {
        return res.status(400).json({ state:'failed', message: 'You must insert a users array' });
    }

    if(users && users.length === 0) {
        return res.status(400).json({ state:'failed', message: 'عليك ادخال مستخدم واحد على الأقل لإنشاء دعوة' });
    }

    try {
        const user = await User.findById(userId);

        const text = user?.username+' ارسل لك دعوة لكي تلعب معه';

        const notefication = await Notefication.create({ title: 'Invite to game', body: text });

        const username = user.username;

        await Promise.all(users.map(async user => {
            const invite = await Invite.create({ roomId: roomId, user_id: user, user: username, title: text, type, img: type === 'online' 
                ? 'uploads/invite/onlineInvite.webp'
                : 'uploads/invite/groupInvite.webp' })

            const { fcmTokens } = await FcmToken.findOne( { user_id: user } );

            fcmTokens?.map(async (fcmToken) => {
                await sendNotification({ fcmToken: fcmToken,
                    title: 'دعوة للعب لعبة',
                    body: text,
                    data: {
                        state: 'success', 
                        message: 'Created invite successfully',
                        inivte: JSON.stringify({
                            'id': invite._id,
                            'roomId': roomId,
                            'user': username,
                            'title': text,
                            'read': false,
                            'type': invite.type,
                            'img': invite.img
                        }),
                        notification: JSON.stringify({
                            '_id': `${notefication._id}`,
                            'createdAt': `${notefication.createdAt}`,
                            'updatedAt': `${notefication.updatedAt}`,
                            '__v': `${notefication.__v}` 
                        }),
                    }
                });
            })
        }))

        return res.status(200).json({ state: 'success', message: 'تم ارسال الدعوة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message });        
    }
}

module.exports = {
    joinToRoom,
    createNewRoomInGroupGame,
    createNewRoomInOnlineGame,
    joinToRoomInGroupGame,
    joinToRoomInOnlineGame,
    deleteAllRooms,
    makeAnInviteToGame
}