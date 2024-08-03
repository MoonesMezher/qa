const { default: mongoose } = require("mongoose");
const User = require("../database/models/User");
const Friend = require("../database/models/Friend");
const friendJson = require("../helpers/handleUserJsonToFriendRequests");
const FcmToken = require("../database/models/FcmToken");
const { sendNotification } = require("../services/firebase/notefications");

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

    if(userId.toString() === user_id.toString()) {
        return res.status(400).json({ state:'failed', message: 'You can not make a friend request to yourself' });
    }

    try {
        let friend = await Friend.findOne({ user_id: userId });

        if(!friend) {
            friend = await Friend.create({ user_id: userId });
        }

        const isExist = friend.friends.find(e => e.id.toString() === user._id.toString());

        if(isExist) {
            return res.status(400).json({ state:'failed', message: 'You already have this user as friend' });
        }

        friend.friends.push({ id: user._id })

        await friend.save();

        const { fcmTokens } = await FcmToken.findOne( { user_id: userId } );

        const text = user.username + 'ارسل لك طلب صداقة'

        const notefication = await Notification.create({ title: 'طلب صداقة', body: text })

        fcmTokens?.map(async (fcmToken) => {
            await sendNotification({ fcmToken: fcmToken,
                title: 'طلب صداقة',
                body: text,
                data: {
                    state: 'success', 
                    message: 'Created friend request successfully',
                    inivte: JSON.stringify({
                        'id': '',
                        'roomId': '',
                        'user': user.username,
                        'title': text,
                        'read': false,
                        'type': 'friend',
                        'img': ''
                    }),
                    notification: JSON.stringify({
                        '_id': `${notefication._id}`,
                        'createdAt': `${notefication.createdAt}`,
                        'updatedAt': `${notefication.updatedAt}`,
                        '__v': `${notefication.__v}` 
                    }),
                }
        });})

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

        const isExist = friend.friends.find(e => (e.id.toString() === userId.toString()) && e.type === 'friend');

        if(isExist) {
            return res.status(400).json({ state:'failed', message: 'You already have this user as friend' });
        }

        const newFriendsArray = friend?.friends?.map(e => {
            if(e?.id.toString() === userId.toString()) {
                return {
                    id: e.id,
                    type: "friend",
                    _id: e._id
                }
            } 
            return e;
        })

        await Friend.findByIdAndUpdate(friend._id,{ friends: newFriendsArray });

        let otherUser = await Friend.findOne({ user_id: userId });

        if(!otherUser) {
            otherUser = await Friend.create({ user_id: userId });
        }

        const isExist2 = otherUser.friends.find(e => e.id.toString() === user_id.toString());

        if(isExist2) {
            return res.status(400).json({ state:'failed', message: 'You already have this user as friend' });
        }

        otherUser?.friends.push({ id: user._id, type: 'friend' });

        await otherUser.save();

        const { fcmTokens } = await FcmToken.findOne( { user_id: userId } );

        const text = user.username + 'وافق على طلب الداقة الخاص بك'

        const notefication = await Notification.create({ title: 'موافقة على طلب الصداقة', body: text })

        fcmTokens?.map(async (fcmToken) => {
            await sendNotification({ fcmToken: fcmToken,
                title: 'موافقة على طلب الصداقة',
                body: text,
                data: {
                    state: 'success', 
                    message: 'ِAccepted friend request successfully',
                    inivte: JSON.stringify({
                        'id': '',
                        'roomId': '',
                        'user': user.username,
                        'title': text,
                        'read': false,
                        'type': 'accept',
                        'img': ''
                    }),
                    notification: JSON.stringify({
                        '_id': `${notefication._id}`,
                        'createdAt': `${notefication.createdAt}`,
                        'updatedAt': `${notefication.updatedAt}`,
                        '__v': `${notefication.__v}` 
                    }),
                }
        });})

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
            return ((e.id.toString() !== userId.toString()) && e.type === 'pending')
        })

        await friend.save();

        return res.status(200).json({ state:'success', message: 'تم الغاء طلب الصداقة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const unSendFriendRequest = async (req, res) => {
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
            return res.status(400).json({ state:'failed', message: 'This user does not have friend request from you' });
        }

        friend.friends = friend.friends.filter(e => {
            return ((e.id.toString() !== user_id.toString()) && e.type === 'pending')
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

        if(!friend) {
            return res.status(400).json({ state:'failed', message: 'لا يوجد لديك أصدقاء' });
        }

        const friends = friend?.friends?.filter(e => {
            return (e.type === "friend")
        })
        
        const finalFriends = await Promise.all(friends?.map(async friend => {
            return await friendJson(friend.id, 'friend');
        }));

        const startIndex = (page - 1) * limit; // calculate the starting index for the current page

        const endIndex = startIndex + limit; // calculate the ending index for the current page

        const paginatedFriends = finalFriends.slice(startIndex, endIndex); // slice the friends array to get the desired page

        return res.status(200).json({ state:'success', message: 'تم عرض كل الأصدقاء بنجاح', allUsers: paginatedFriends, total: friends.length });
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

        if(!friend) {
            return res.status(400).json({ state:'failed', message: 'لا يوجد طلبات صداقة مرسلة' });
        }

        const friends = friend?.friends?.filter(e => {
            return (e.type === "pending")
        })

        const finalFriends = await Promise.all(friends.map(async friend => {
            return await friendJson(friend.id, 'request');
        }));

        const startIndex = (page - 1) * limit; // calculate the starting index for the current page

        const endIndex = startIndex + limit; // calculate the ending index for the current page

        const paginatedFriends = finalFriends.slice(startIndex, endIndex); // slice the friends array to get the desired page

        return res.status(200).json({ state:'success', message: 'تم عرض كل طلبات الصداقة بنجاح', allUsers: paginatedFriends, total: friends.length });
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

        const newFriendsArray = await Promise.all(friend.friends.map(async e => {
            if(e.type === 'pending') {
                    let otherUser = await Friend.findOne({ user_id: e.id });
        
                    if(!otherUser) {
                        otherUser = await Friend.create({ user_id: e.id });
                    }
        
                    otherUser?.friends.push({ id: user._id, type: 'friend' });
        
                    await otherUser.save();

                    return {
                        id: e.id,
                        type: "friend",
                        _id: e._id
                    }
                } 
            return e;
        }))

        await Friend.findByIdAndUpdate(friend._id,{ friends: newFriendsArray });

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
            return (e.type !== 'pending')
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

        const newFriends = friend.friends.filter(e => {
            return (e.id.toString() !== userId.toString())
        })

        await Friend.findByIdAndUpdate(friend._id ,{ friends: newFriends });

        let otherUser = await Friend.findOne({ user_id: userId });

        const newFriends2 = otherUser?.friends?.filter(e => {
            return (e.id.toString() !== user._id.toString())
        })

        await Friend.findByIdAndUpdate(otherUser._id ,{ friends: newFriends2 });

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
    deleteFriend,
    unSendFriendRequest
}