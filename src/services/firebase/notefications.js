const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "footballd-2a1ee",
        "private_key_id": "412691a9c3c11b071461d1e1ca5d896828e84f7c",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCkejKs+AqVTx9+\npPUp6hCzW3FhxEgvVGFvGR0oFQhEZ+4BfWT5O+xK52Onk2gDdX8Hu9joqvWr7uGV\n5LBL2r89Sz5UqOk2h4hqX6FRX3xij2tl2GNUY/4y1AADC7VDKhHjECGHgpYHmcyH\ni3uPvasGAaENxrkBW1cZGX/j3jlTwshN2Ps0DFzJxbFc2zqJ0NESXakUouHYkvT5\njnGDoT/atoTgKoOPSAaFCJ4UP+WS9Bmxd87Z1TFiVZt6rmIMs7yM6Sg1zwjDC9K9\nAUOGz08q1Z782Jq6+bkHkdhKocwHN+5ekSq5fcV6lT446GAoOMpIDPOWDqyA5PzU\nSXmI68wDAgMBAAECgf8TwSAJr5ChQ4jL7J9W6FjAShU7ilhopEZM5MrAFAv/ueKi\njuANU7k7ShO0XFEzJWyyLbyT11j1PWi69SV+9zuo0CGojI80Dlgo4MRzcT4E8vmL\n856hMniR6H071/NxyQlVvhmafweHpGS/cXZ0gWtbkd6PfAITHRB+m6fbQMtVr1qs\nyvITvgzWxAwc7n1LNJNj2omReleP3kW5EoCHpaEPxbLS9Cdo0Nd4in1iDFT90DlI\n/+KEdCKuI2rK0q8YuBSYt3D3MClxIvqaOGuQxtmh+1ZT0xR89HlAF1GTWveqPb6o\nNiepl9PKhL9QfPffi5xY0ivc4kxB6NqY6KB3L2ECgYEA3xNNZ5m0+zhQ2y6ES2ig\nyzgLCFxRNHgNy2nzVFsDa3se7E0Tp4OgmdmomInowtcnv/oo16j8kA68vpOwBqPo\nM9KFVFGbiFtYJSAYhRGBO3ub6Xv2Laq9lmBHTmspt0wCkyuzjLHqhRgnAtfhnH8Y\nayByi1G68XcZKbZ3CmY2KdsCgYEAvMDSarnhZlyPZQ/eA9Kkp5uSNO6+ibfPJlTZ\nZhRGG6aUExK1kSEc+uvGKQvSAiG/XreN/15qPuapgJKrjK+9fuARRXWSWPJmfhrW\nPRbQN5tOwOIrdB8N15e3o9K6izQow+9M7yVHoAnCSyo0xTiEF/5iLo2k9t4RPCN8\nokhqIvkCgYEAiw8nU4vX7DtA/EFVKwUAJ266Qe36mTC1uLZFf7J0wU2xCzFJLUW6\nme27Ucu2k684Ek7JoxauysbFFjBOrPUETTnQ760nvarjmdEWN+2fmAsIOFaUMgeb\nw+Ak01euW5tAh6nYdb57KZjSyMz20W3RNQa3IO5EET5jK0OZlZv9670CgYAYyISY\nSNHEm/CkB2JSRC0kaLPYyWQxNvY3BTsKQS03YjbdDj7S0HM6qwx4xTmM2BuFdzpo\nxl/S5HxrClcGAOkzqH38DcTqcuFsO1/X44/xTS4Y+1lTROSPYzdUhk3CC1Yy68/B\nMrbl14IwVllZb+NAN0Fy9VwsodnHeK1brYBqGQKBgAve/PE0B9pq986XCtCcTgHK\nh4sOib9LumNNFoyWKyllxlJT6GyevqCGytsnMlw7JGOSwk6UOZ04Fe8ygi+RxqYM\nhK/QRLFzcsDCZW9bwNOJsKQzdJw0J9JCcjaaVFCG9laqiDYRcp4eY20k5iP62TXk\nN22fdPaSkymaQfFmAmkA\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-uaw5m@footballd-2a1ee.iam.gserviceaccount.com",
        "client_id": "105595227317082747217",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uaw5m%40footballd-2a1ee.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }),
});

module.exports = { 
    admin
}