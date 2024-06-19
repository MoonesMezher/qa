const admin = require('firebase-admin');

const env = process.env;

admin.initializeApp({
    credential: admin.credential.cert({
        "type": env.FIRBASE_NOTIFICATION_TYPE,
        "project_id": env.FIRBASE_NOTIFICATION_PROJECT_ID,
        "private_key_id": env.FIRBASE_NOTIFICATION_PRIVATE_KEY_ID,
        "private_key": env.FIRBASE_NOTIFICATION_PRIVATE_KEY,
        "client_email": env.FIRBASE_NOTIFICATION_CLIENT_EMAIL,
        "client_id": env.FIRBASE_NOTIFICATION_CLIENT_ID,
        "auth_uri": env.FIRBASE_NOTIFICATION_AUTH_URI,
        "token_uri": env.FIRBASE_NOTIFICATION_TOKEN_URI,
        "auth_provider_x509_cert_url": env.FIRBASE_NOTIFICATION_AUTH_PROVIDER,
        "client_x509_cert_url": env.FIRBASE_NOTIFICATION_CLIENT_CERT_URL,
        "universe_domain": env.FIRBASE_NOTIFICATION_UNIVERSE_DOMAIN
    }),
});

module.exports = { 
    admin
}
