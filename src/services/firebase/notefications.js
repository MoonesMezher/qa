const admin = require('firebase-admin');

const env = process.env;

admin.initializeApp({
    // credential: admin.credential.cert({
    //     "type": env.FIRBASE_NOTIFICATION_TYPE,
    //     "project_id": env.FIRBASE_NOTIFICATION_PROJECT_ID,
    //     "private_key_id": env.FIRBASE_NOTIFICATION_PRIVATE_KEY_ID,
    //     "private_key": env.FIRBASE_NOTIFICATION_PRIVATE_KEY,
    //     "client_email": env.FIRBASE_NOTIFICATION_CLIENT_EMAIL,
    //     "client_id": env.FIRBASE_NOTIFICATION_CLIENT_ID,
    //     "auth_uri": env.FIRBASE_NOTIFICATION_AUTH_URI,
    //     "token_uri": env.FIRBASE_NOTIFICATION_TOKEN_URI,
    //     "auth_provider_x509_cert_url": env.FIRBASE_NOTIFICATION_AUTH_PROVIDER,
    //     "client_x509_cert_url": env.FIRBASE_NOTIFICATION_CLIENT_CERT_URL,
    //     "universe_domain": env.FIRBASE_NOTIFICATION_UNIVERSE_DOMAIN
    // }),
    credential: admin.credential.cert({
        type: 'service_account',
        project_id: env.FIRBASE_NOTIFICATION_PROJECT_ID,
        private_key_id: env.FIRBASE_NOTIFICATION_PRIVATE_KEY_ID,
        private_key: env.FIRBASE_NOTIFICATION_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: env.FIRBASE_NOTIFICATION_CLIENT_EMAIL,
        client_id: env.FIRBASE_NOTIFICATION_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: env.FIRBASE_NOTIFICATION_CLIENT_CERT_URL
    }),
    // databaseURL: env.MONGO_URI
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
    // const messages = fcmToken.map((token) => ({
    //     token,
    //     notification: {
    //         title,
    //         body,
    //     },
    //     data,
    // }));

    try {
        // const responses = await Promise.all(messages.map(async (message) => await admin.messaging.send(message)));
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
