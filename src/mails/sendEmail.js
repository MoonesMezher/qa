const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
        user: '',
        pass: ''
    }
});

// Define a function to send email
async function sendEmail(to, subject, body) {
    try {
        const mailOptions = {
            from: '',
            to,
            subject,
            text: body
        };
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// sendEmail('faresmezher9@gmail.com', 'gg', 'hi from moones');

module.exports = sendEmail;