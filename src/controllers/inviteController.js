const Invite = require("../database/models/Invite");
const NotefectionsList = require("../database/models/NotefectionsList");
const User = require("../database/models/User");

const showOwnInvites = async (req, res) => {
    const userId = req.user._id;

    const user = await User.findById(userId);

    if(!user) {
        return res.status(400).json({ state: 'failed', message: "User not found" })
    }

    try {
        const foudHoursAgo = new Date(Date.now() - 4 * 60 * 60 * 1000);

        await Invite.deleteMany({ createdAt: { $lt: foudHoursAgo } });

        await NotefectionsList.deleteMany({ createdAt: { $lt: foudHoursAgo } });

        const nots = await NotefectionsList.find({ user_id: userId });

        const data = await Promise.all(nots.map(note => {
            return {
                id: note._id,
                roomId: note.roomId,
                user: note.user,
                title: note.title,
                read: note.read,
                type: note.type,
                img: note.img
            }
        }));

        return res.status(200).json({ state: 'success', message: 'تم عرض جميع الاشعارات بنجاح', data })        
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message })        
    }
}

const readInvite = async (req, res) => {
    const { id } = req.params;

    const userId = req.user._id;

    const user = await User.findById(userId);

    if(!user) {
        return res.status(400).json({ state: 'failed', message: "User not found" })
    }

    const isExist = await NotefectionsList.findOne({ _id: id  });

    if(!isExist) {
        return res.status(400).json({ state: 'failed', message: 'This invite not exist' })        
    }

    try {
        const invite = await NotefectionsList.findByIdAndUpdate(id, { read: true }, { new: true });

        return res.status(200).json({ state: 'success', message: 'تم قراءة الاشعار بنجاح', invite })                
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message })        
    }
}

const cancelInvite = async (req, res) => {
    const { id } = req.params;

    const userId = req.user._id;

    const user = await User.findById(userId);

    if(!user) {
        return res.status(400).json({ state: 'failed', message: "User not found" })
    }

    const isExist = await NotefectionsList.findOne({ _id: id  });

    if(!isExist) {
        return res.status(400).json({ state: 'failed', message: 'This invite not exist' })        
    }

    if(isExist.user_id.toString() !== userId.toString()) {
        return res.status(400).json({ state: 'failed', message: 'You can not cancel invite not for you' })        
    }

    try {
        await NotefectionsList.findByIdAndDelete(id);

        return res.status(200).json({ state: 'success', message: 'تم حذف الدعوة بنجاح' });                
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message })        
    }
}

module.exports = {
    showOwnInvites,
    readInvite,
    cancelInvite
}