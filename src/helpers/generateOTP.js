const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString().slice(-4);
}

module.exports = generateOTP