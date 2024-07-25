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

        return res.status(200).json({ state: 'success', message: 'تم عرض جميع الدعوات بنجاح',invites })        
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message })        
    }
}

module.exports = {
    showOwnInvites
}