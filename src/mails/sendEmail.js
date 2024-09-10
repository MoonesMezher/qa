const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465, // 587 or 465 for SSL
    secure: true, // true for 465, false for other ports
    auth: { 
        user: 'support@superquizgame.com',
        pass: 'ss8877@@',
    },
});

// Define a function to send email
async function sendEmail(to, otp) {
    try {
        const mailOptions = {
            from: 'support@superquizgame.com',
            to,
            subject: 'Password Reset OTP',
            text: 
            `Please enter the following code to complete your verification: 
                ${otp}
            This code is valid for a limited time only.`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}


// const x = async () => {
//     await sendEmail('moonesmezher9@gmail.com', 1234)
// }

// x();

module.exports = sendEmail;