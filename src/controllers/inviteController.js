const Invite = require("../database/models/Invite");
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

        const invites = await Invite.find({ user_id: userId });

        const data = await Promise.all(invites.map(invite => {
            return {
                roomId: invite.roomId,
                user: invite.user,
                title: invite.title,
                read: invite.read
            }
        }));


        return res.status(200).json({ state: 'success', message: 'تم عرض جميع الدعوات بنجاح', data })        
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

    const isExist = await Invite.findOne({ _id: id  });

    if(!isExist) {
        return res.status(400).json({ state: 'failed', message: 'This invite not exist' })        
    }

    try {
        const invite = await Invite.findByIdAndUpdate(id, { read: true }, { new: true });

        return res.status(200).json({ state: 'success', message: 'تم قراءة الدعوة بنجاح', invite })                
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message })        
    }
}

module.exports = {
    showOwnInvites,
    readInvite
}