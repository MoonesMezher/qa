const admin = require('firebase-admin');

const serviceAccount = require('../../../firebaseconfige.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

async function sendNotification(notification) {
    const { title, body, fcmToken, data } = notification;

    const message = {
        token: fcmToken,
        notification: {
            title: title,
            body: body
        },
        data,
    };

    try {
        const response = await admin.messaging().send(message);

        console.log('Successfully sent message:', response);
    } catch (error) {
        console.log('Error sending message:', error);
    }
}

module.exports = { 
    admin,
    sendNotification
}