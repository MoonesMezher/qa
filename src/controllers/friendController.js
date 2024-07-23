const { default: mongoose } = require("mongoose");
const User = require("../database/models/User");
const Friend = require("../database/models/Friend");

const limit = 50;

const addFriend = async (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({ state:'failed', message: 'You should select user to make a friend request' });
    }

    if(!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ state:'failed', message: 'User Id must be valid' });
    }

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    try {
        let friend = await Friend.findOne({ user_id: userId });

        if(!friend) {
            friend = await Friend.create({ user_id: userId });

            friend.friends.push({ id: user._id })
        }

        await friend.save();

        return res.status(200).json({ state:'success', message: 'تم ارسال طلب الصداقة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const acceptFriendRequest = async (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({ state:'failed', message: 'You should select user to make a friend request' });
    }

    if(!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ state:'failed', message: 'User Id must be valid' });
    }

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    try {
        let friend = await Friend.findOne({ user_id: user._id });

        friend.friends = friend?.friends?.map(e => {
            if(e.id === userId) {
                e.type = 'friend';
            }
        })

        await friend.save();

        let otherUser = await Friend.findOne({ user_id: userId });

        if(!otherUser) {
            otherUser = await Friend.create({ user_id: userId });
        }

        otherUser?.friends.push({ id: user._id, type: 'friend' });

        await otherUser.save();

        return res.status(200).json({ state:'success', message: 'تم الموافقة على طلب الصداقة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const cancelFriendRequest = async (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({ state:'failed', message: 'You should select user to make a friend request' });
    }

    if(!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ state:'failed', message: 'User Id must be valid' });
    }

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    try {
        let friend = await Friend.findOne({ user_id: user._id });

        friend.friends = friend.friends.filter(e => {
            (e.id !== userId)
        })

        await friend.save();

        return res.status(200).json({ state:'success', message: 'تم الغاء طلب الصداقة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const getAllFriends = async (req, res) => {
    const { page } = req.params;

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    try {
        const friend = await Friend.findOne({ user_id: user._id });

        const friends = friend?.friends?.filter(e => {
            (e.type === "friend")
        })

        const startIndex = (page - 1) * limit; // calculate the starting index for the current page

        const endIndex = startIndex + limit; // calculate the ending index for the current page

        const paginatedFriends = friends.slice(startIndex, endIndex); // slice the friends array to get the desired page

        return res.status(200).json({ state:'success', message: 'تم عرض كل الأصدقاء بنجاح', friends: paginatedFriends, total: friends.length });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const getAllFriendRequests = async (req, res) => {
    const { page } = req.params;

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    try {
        const friend = await Friend.findOne({ user_id: user._id });

        const friends = friend?.friends?.filter(e => {
            (e.type === "pending")
        })

        const startIndex = (page - 1) * limit; // calculate the starting index for the current page

        const endIndex = startIndex + limit; // calculate the ending index for the current page

        const paginatedFriends = friends.slice(startIndex, endIndex); // slice the friends array to get the desired page

        return res.status(200).json({ state:'success', message: 'تم عرض كل طلبات الصداقة بنجاح', friendRequests: paginatedFriends, total: friends.length });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const acceptAllFriendRequests = async (req, res) => {
    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    try {
        let friend = await Friend.findOne({ user_id: user._id });

        friend.friends = friend.friends.map(e => {
            if(e.type === 'pending') {
                e.type = 'friend';
            }
        })

        await friend.save();

        return res.status(200).json({ state:'success', message: 'تم الموافقة على جميع طلبات الصداقة المرسلة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const cancelAllFriendRequests = async (req, res) => {
    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    try {
        let friend = await Friend.findOne({ user_id: user._id });

        friend.friends = friend.friends.filter(e => {
            (e.type !== 'pending')
        })

        await friend.save();

        return res.status(200).json({ state:'success', message: 'تم الغاء جميع طلبات الصداقة المرسلة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const deleteFriend = async (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({ state:'failed', message: 'You should select user to make a friend request' });
    }

    if(!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ state:'failed', message: 'User Id must be valid' });
    }

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    try {
        let friend = await Friend.findOne({ user_id: user._id });

        friend.friends = friend.friends.filter(e => {
            (e.id !== userId)
        })

        await friend.save();

        let otherUser = await Friend.findOne({ user_id: userId });

        otherUser.friends = otherUser?.friends?.filter(e => {
            (e.id !== user._id)
        })

        await otherUser.save();

        return res.status(200).json({ state:'success', message: 'تم حذف علاقة الصداقة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

module.exports = {
    addFriend,
    acceptAllFriendRequests,
    acceptFriendRequest,
    cancelAllFriendRequests,
    cancelFriendRequest,
    getAllFriendRequests,
    getAllFriends,
    deleteFriend
}