const express = require('express');
const router = express.Router();

// methods
const { createOtpAndSendToMail, checkFromOtp, updatePassword } = require('../controllers/otpController');

// middlewares

// routes
router.get('/check', checkFromOtp);

router.post('/send', createOtpAndSendToMail);

router.put('/update', updatePassword);

module.exports = router;