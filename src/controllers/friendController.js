const { default: mongoose } = require("mongoose");
const User = require("../database/models/User");
const Friend = require("../database/models/Friend");
const friendJson = require("../helpers/handleUserJsonToFriendRequests");
const FcmToken = require("../database/models/FcmToken");
const { sendNotification } = require("../services/firebase/notefications");
const Request = require("../database/models/Request");
const Notefication = require("../database/models/Notefication");
const NoteficationsList = require("../database/models/NotefectionsList");

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
        let friend = await Friend.findOne({ user_id: user_id, friends: { $in: userId } });

        if(friend) {
            return res.status(400).json({ state:'failed', message: 'أنت بالفعل صديق هذا اللاعب' });
        }

        let request = await Request.findOne({ from: user_id , to: userId });

        if(request) {
            return res.status(400).json({ state:'failed', message: 'أنت بالفعل لقد ارسلت الطلب انتظر الرد' });
        }

        request = await Request.create({ from: user_id , to: userId});

        const here = await FcmToken.findOne( { user_id: userId } );

        const text = user.username + 'ارسل لك طلب صداقة'

        const notefication = await Notefication.create({ title: 'طلب صداقة', body: text })

        await NoteficationsList.create({ roomId: request._id, user_id: userId, user: user.username, title: text, type: 'friend', img: 'uploads/invite/friendRequest.webp' });

        here?.fcmTokens?.map(async (fcmToken) => {
            await sendNotification({ fcmToken: fcmToken,
                title: 'طلب صداقة',
                body: text,
                data: {
                    state: 'success', 
                    message: 'Created friend request successfully',
                    inivte: JSON.stringify({
                        'id': user_id,
                        'roomId': request._id,
                        'user': user.username,
                        'title': text,
                        'read': false,
                        'type': 'friend',
                        'img': 'uploads/invite/friendRequest.webp'
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
    const { requestId } = req.params;

    if(!requestId) {
        return res.status(400).json({ state:'failed', message: 'You should select requestId to make a friend request' });
    }

    if(!mongoose.Types.ObjectId.isValid(requestId)) {
        return res.status(400).json({ state:'failed', message: 'requestId must be valid' });
    }

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    const request = await Request.findById(requestId);

    if(!request) {
        return res.status(400).json({ state:'failed', message: 'No request to control' });
    }

    try { 
        let friend = await Friend.findOne({ user_id: user._id, friends: { $in: request.from } });
        
        if(friend) {
            return res.status(400).json({ state:'failed', message: 'You already have this user as friend' });
        }

        let me = await Friend.findOne({ user_id: user._id });

        if(!me) {
            me = await Friend.create({ user_id: user._id })
        }

        let he = await Friend.findOne({ user_id: request.from });

        if(!he) {
            he = await Friend.create({ user_id: request.from })
        }

        me.friends.push(request.from);

        await me.save();

        he.friends.push(request.to);

        await he.save();

        const here = await FcmToken.findOne( { user_id: request.from } );

        const text = user.username + 'وافق على طلب الداقة الخاص بك'

        const notefication = await Notefication.create({ title: 'موافقة على طلب الصداقة', body: text })

        await NoteficationsList.create({ roomId: notefication._id, user_id: request.from, user: user.username, title: text, type: 'accept', img: 'uploads/invite/acceptRequest.webp' });

        here?.fcmTokens?.map(async (fcmToken) => {
            await sendNotification({ fcmToken: fcmToken,
                title: 'موافقة على طلب الصداقة',
                body: text,
                data: {
                    state: 'success', 
                    message: 'ِAccepted friend request successfully',
                    inivte: JSON.stringify({
                        'id': user_id,
                        'roomId': '',
                        'user': user.username,
                        'title': text,
                        'read': false,
                        'type': 'accept',
                        'img': 'uploads/invite/acceptRequest.webp'
                    }),
                    notification: JSON.stringify({
                        '_id': `${notefication._id}`,
                        'createdAt': `${notefication.createdAt}`,
                        'updatedAt': `${notefication.updatedAt}`,
                        '__v': `${notefication.__v}` 
                    }),
                }
        });})

        await Request.findByIdAndDelete(request._id)

        return res.status(200).json({ state:'success', message: 'تم الموافقة على طلب الصداقة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const cancelFriendRequest = async (req, res) => {
    const { requestId } = req.params;

    if(!requestId) {
        return res.status(400).json({ state:'failed', message: 'You should select requestId to cancel a friend request' });
    }

    if(!mongoose.Types.ObjectId.isValid(requestId)) {
        return res.status(400).json({ state:'failed', message: 'requestId must be valid' });
    }

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    const request = await Request.findById(requestId);

    if(!request) {
        return res.status(400).json({ state:'failed', message: 'No request to control' });
    }

    try {
        if(request.to.toString() !== user_id.toString()) {
            return res.status(400).json({ state:'failed', message: 'You can not reject request not to you' });
        }

        await Request.findByIdAndDelete(request._id);       

        return res.status(200).json({ state:'success', message: 'تم الغاء طلب الصداقة بنجاح' });
    } catch (error) {
        return res.status(400).json({ state:'failed', message: error.message });
    }
}

const unSendFriendRequest = async (req, res) => {
    const { requestId } = req.params;

    if(!requestId) {
        return res.status(400).json({ state:'failed', message: 'You should select requestId to make a friend request' });
    }

    if(!mongoose.Types.ObjectId.isValid(requestId)) {
        return res.status(400).json({ state:'failed', message: 'requestId must be valid' });
    }

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state:'failed', message: 'Your data does not found' });
    }

    const request = await Request.findById(requestId);

    if(!request) {
        return res.status(400).json({ state:'failed', message: 'No request to control' });
    }

    try {
        if(request.from.toString() !== user_id.toString()) {
            return res.status(400).json({ state:'failed', message: 'You can not un send request not from you' });
        }

        await Request.findByIdAndDelete(request._id);   

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
        
        const finalFriends = await Promise.all(friend.friends?.map(async friend => {
            return await friendJson(friend, 'friend');
        }));

        const startIndex = (page - 1) * limit; // calculate the starting index for the current page

        const endIndex = startIndex + limit; // calculate the ending index for the current page

        const paginatedFriends = finalFriends.slice(startIndex, endIndex); // slice the friends array to get the desired page

        return res.status(200).json({ state:'success', message: 'تم عرض كل الأصدقاء بنجاح', allUsers: paginatedFriends, total: finalFriends.length });
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
        const requests = await Request.find({ to: user_id })

        const finalReuests = await Promise.all(requests?.map(async request => {
            return await friendJson(request.from, 'request', request._id);
        }));

        const startIndex = (page - 1) * limit; // calculate the starting index for the current page

        const endIndex = startIndex + limit; // calculate the ending index for the current page

        const paginatedFriends = finalReuests.slice(startIndex, endIndex); // slice the friends array to get the desired page

        return res.status(200).json({ state:'success', message: 'تم عرض كل طلبات الصداقة بنجاح', allUsers: paginatedFriends, total: requests.length });
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
        const requests = await Request.find({ to: user_id });

        Promise.all(requests.map(async e => {
            let me = await Friend.findOne({ user_id: user._id });

            if(!me) {
                me = await Friend.create({ user_id: user._id })
            }

            let he = await Friend.findOne({ user_id: e.from });

            if(!he) {
                he = await Friend.create({ user_id: e.from })
            }

            me.friends.push(e.from);

            await me.save();

            he.friends.push(e.to);

            await he.save();

            await Request.findByIdAndDelete(e._id);
        }))

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
        const requests = await Request.find({ to: user_id });

        Promise.all(requests.map(async e => {
            await Request.findByIdAndDelete(e._id);
        }))

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
        let me = await Friend.findOne({ user_id: user._id });

        let he = await Friend.findOne({ user_id: userId });

        if(!he || !me) {
            return res.status(400).json({ state:'failed', message: 'You must be friends first to make this action' });
        }

        const removeHim = me.friends.filter(e => e.toString() !== userId.toString());

        const removeMe = he.friends.filter(e => e.toString() !== user._id.toString());

        await Friend.findByIdAndUpdate(me._id ,{ friends: removeHim });

        await Friend.findByIdAndUpdate(he._id ,{ friends: removeMe });

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