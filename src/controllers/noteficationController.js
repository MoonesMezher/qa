const { default: mongoose } = require("mongoose");
const FcmToken = require("../database/models/FcmToken");
const Notefication = require("../database/models/Notefication");
const { admin, sendNotification } = require("../services/firebase/notefications");
const User = require("../database/models/User");

const saveToken = async (req, res) => {
    const { fcm_token, user_id } = req.body;

    if(!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ state: 'failed', message: 'User Id must be valid'});      
    }

    if(typeof fcm_token !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'FCM Token must be string'});      
    }

    const user = await User.findById(user_id)

    if(!user) {
        return res.status(400).json({ state: 'failed', message: 'This user does not exist'});      
    }

    try {
        const theSameUserDevice = await FcmToken.findOne({ user_id, fcmTokens: { $in : fcm_token } });
        
        if(theSameUserDevice) {
            return res.status(400).json({ state: 'failed', message: 'FCM Token is already exist'});
        }

        let userDevice = await FcmToken.findOne({ user_id });

        if(userDevice) {
            userDevice.fcmTokens = [fcm_token];

            await userDevice.save();

            return res.status(200).json({ state: 'success', message: 'Saved FCM token successfully'});
        }

        await FcmToken.create( { user_id, fcmTokens: [fcm_token], role: user.role } );

        return res.status(200).json({ state: 'success', message: 'Saved FCM token successfully'});
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message});      
    }
};

const createNotefication = async (req, res) => {
    const { title, body } = req.body;

    if(!title) {
        return res.status(400).json({ state: 'failed', message: 'Title can not be an empty' });      
    }

    if(!body) {
        return res.status(400).json({ state: 'failed', message: 'Body cannot be an empty'});      
    }

    if(typeof body !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'Body must be string'});      
    }

    if(typeof title !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'Title must be string'});      
    }

    try {
        await Notefication.create( { title, body } );

        const tokens = await FcmToken.find( { } );

        const mainTokens = tokens.filter((e) => e.role === 'user' || e.role === 'guest');

        const mainUserDeviceTokens = mainTokens.map((e) => [...e.fcmTokens]);

        if (tokens.length > 0) {
            mainUserDeviceTokens.map(async (fcmToken) => {
                await sendNotification({ fcmToken: fcmToken,
                    title,
                    body,
                    data: {}
                });
            })
        }

        return res.status(200).json({ state: 'success', message: 'Created notefication successfully' });
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message});      
    }
};


module.exports = {
    saveToken,
    createNotefication
}