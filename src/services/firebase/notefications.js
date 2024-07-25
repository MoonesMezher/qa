const admin = require('firebase-admin');

const serviceAccount = require('../../../firebaseconfige.json');

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "game-eee73",
        "private_key_id": "cb83364b90c98b73a4c0935d2ed47dd0fcde3331",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgkAysbhVYtoXs\n3V+mroLvo8ddY+XqS6mVSq2JpHUM1Af25SzM1VDcS1r7eLFuESjHRi1oCitYjYLn\n2uHSt38kK+skuKaO9OYZc4TrGujDVh6RB03MeDKocC8Khf4/JWuFwdYvnr55Adfs\nIT4apN67QUYK6EkiZw4ciZY+Vby+TfwRVBkaCKPvXwYywCqWjs3WU9A4q3uLARdA\n+jsV+00AWVq0Q8whGWh+u+uEmo7vI8YGh57kO32cYKbTLlUtTaJeTazHEZIqXDNW\nKOeBASOzQnQWf1CaMTEbQg3Z7H1YTMBiJML9a6ve/CZI/EgxYohoUv1urj4YZWrY\ne0TP114lAgMBAAECggEACJvOSiXdrvzlIcE5C3GRbJ/ytvp9sgxAneZOUp/ZBwke\n9aASHFfyJJD8UAbjEsDkDlKN+/eJVCHD7acqBSLdD1B+EhfiXtKHBS6+wnEV+nhM\nXfau7jtY//g4+gWt2GXhuAONdqm6baXE3pCvJGHaJnEPahxwm2HzRD1uPWnH0lvg\ncHNXfKQlzxGV0tSCzMs4As1YnLkMYFv5S0Pl3dXDXly/OGsH7v2Z11u19N8m5xON\numSzFplIkX3/tLZIOmAlKQ3YUlF9nfrhOt4uzQtmXgWyCb2oG4EniYnjfUJ3Sgiz\nJb1fM9Oc4KpkbR6U9HCUwcuxv82p1/O6VbCRsOSluwKBgQDLKqV4EqyfbMfBmnXw\nOBc2VQYnHyXcaNaqZHUsDWe0Ctg9zqUfMjFUbyiZBE7ZYdoruS1e0Jcvsg8O3KFg\nKsH29hgLgJfNLJ0oKNM6L10nXdTBxQem8PWEb86XDVqeR0DoJikQ0As5fa+Rb2wO\nx2Z2HY9cHwCAfjg08sjdCWwZ/wKBgQDKUSVQ2iHUiMvrXOypQRmDPT2HehSsESDc\nCvuN78vNKAQrXh2V72n+H7A+cwnZKWu+qT6k+zFAsqmO0JFKiVaWEmEw9hPGpJt4\nMBlhtYrnVghlfbqTiZ2JqKgcXnI46dxq+cbOjPIndBox5SREaeYV+vGVU50yZGoG\nOWpSukjf2wKBgDkeN0EHtwJnOc3DWC7+BgCfbMho6GMMEnX7IjoNVr92YQ8XXrLj\nkJzVV4uVe3mAGi86s3e5mxesrrEV9ESuILQGwgHR2Fu1lEVrHN95222q4prLgvg7\nPDtMl7894OEo1SWvPNJeOxmhrU9tDOsmwjao3toeWSzGz5SLQU9rS7oPAoGBALxs\n2NE1Zx6XjTwWXn/AFq/JIH4FsC0VAsKNI/3sYKYg58kwLWPQB6pa/v0ajQiI8EUx\nQRvMqvFztEFDdJ2zzUWVtpkwBfkSo41LVshOmSCdWtKTR2pTV7q2rmNFfyIMhHHJ\nUWRblsgx9JeVrrJc4qKEBe2qYxRkuu4zGRgVUPvTAoGBAITbPcFlE4BN4NqID/iV\nZAXa/QFA/3TKGobBlmTCTDFKhTJGZj6JBrANz+p4L4xalqVEtRvOc+2tFOs/syj8\nf4aER4yVz9qzhtSLRu64foSeznxyUNIQi/Ch4y6vvkCXR89BzynMPeRxGruKaRtq\nK/8kNtykY3t+ljhGtlb4/iWb\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-7gymc@game-eee73.iam.gserviceaccount.com",
        "client_id": "116412981156822299859",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7gymc%40game-eee73.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    })
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