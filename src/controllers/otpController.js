const validator = require('validator');
const User = require('../database/models/User');
const OTP = require('../database/models/OTP');
const generateOTP = require('../helpers/generateOTP');
const sendEmail = require('../mails/sendEmail');
const passwordHash = require('password-hash');

const createOtpAndSendToMail = async (req, res) => {
    try {
        const { email } = req.body;

        if(!email) {
            return res.status(400).json({ state: "failed", message: 'يجب إدخال الإيميل الخاص بك' });                                    
        }

        if(typeof email !== "string") {
            return res.status(400).json({ state: "failed", message: 'يجب أن يكون الإيميل من النوع النصي' });                                    
        }

        if(typeof email !== "string") {
            return res.status(400).json({ state: "failed", message: 'يجب أن يكون الإيميل من النوع النصي' });                                    
        }

        if(!validator.isEmail(email)) {
            return res.status(400).json({state: "failed", message: "الايميل غير صالح"})
        }

        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({state: "failed", message: "لا يوجد حساب يحمل الإيميل السابق"})
        }

        let otp = await OTP.findOne({ userId: user._id });

        const key = generateOTP();

        if(otp) {
            otp.pass = key

            await otp.save();
        } else {
            otp = await OTP.create({ userId: user._id, pass: key })
        }

        await sendEmail(email, key);

        return res.status(200).json({ state: "success", message: 'تم ارسال الكود بنجاح' });                    
    } catch (err) {
        return res.status(400).json({ state: "failed", message: err.message });                                    
    }
}

const checkFromOtp = async (req, res) => {
    try {
        const { otp, email } = req.body;

        if(!otp) {
            return res.status(400).json({ state: "failed", message: 'يجب إدخال الركز المرسل اليك' });                                    
        }

        if(typeof otp !== "string") {
            return res.status(400).json({ state: "failed", message: 'يجب أن يكون الرمز من النوع النصي' });                                    
        }

        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({state: "failed", message: "لا يوجد حساب يحمل الإيميل السابق"})
        }

        if(otp.length !== 4) {
            return res.status(400).json({state: "failed", message: "الرمز يجب أن يتكون من أربع محارف فقط"})            
        }

        const M15 = new Date(Date.now() - (16 * 60 * 1000));

        await OTP.deleteMany({ updatedAt: { $lt: M15 } })

        const key = await OTP.findOne({ userId: user._id });

        if(!key) {
            return res.status(400).json({state: "failed", message: "لا يوجد رمز خاص بك قم بالإرسال مرة أخرى"})            
        }
        
        if(key.pass !== otp) {
            return res.status(400).json({state: "failed", message: "الرمز خاطئ"})            
        }

        await OTP.findByIdAndDelete(key.id);

        return res.status(200).json({ state: "success", message: 'الرمز صحيح' });                    
    } catch (err) {
        return res.status(400).json({ state: "failed", message: err.message });                                    
    }
}

const updatePassword = async (req, res) => {
    const { email ,password, confirm } = req.body;

    if(!password) {
        return res.status(400).json({state: 'failed', message: 'يجب إدخال كلمة السر الجديدة'});         
    }

    if(typeof password !== 'string') {
        return res.status(400).json({state: 'failed', message: 'كلمة السر يجب أن تكون نص'});         
    }

    if(password.length < 7) {
        return res.status(400).json({state: "failed", message: "كلمة السر يجب أن تكون أكثر من 7 محارف"})
    }

    if(!email) {
        return res.status(400).json({state: 'failed', message: 'يجب إدخال الإيميل الخاص'});         
    }

    if(typeof email !== 'string') {
        return res.status(400).json({state: 'failed', message: 'الإيميل يجب أن تكون نص'});         
    }

    const user = await User.findOne({ email });

    if(!user) {
        return res.status(400).json({state: 'failed', message: 'لا يوجد مستخدم يوافق الايميل'});         
    }

    if(!confirm) {
        return res.status(400).json({state: 'failed', message: 'يجب إدخال تأكيد كلمة السر'});         
    }

    if(typeof confirm !== 'string') {
        return res.status(400).json({state: 'failed', message: 'تأكيد كلمة السر يجب أن يكون نص'});         
    }

    if(confirm !== password) {
        return res.status(400).json({state: 'failed', message: 'كلمة السر وكلمة التأكيد غير متوافقين'});         
    }

    try {
        const hash = passwordHash.generate(password);

        user.password = hash;

        await user.save();

        return res.status(200).json({state: "success", message: 'تم تأكيد كلمة السر بنجاح'})        
    } catch (error) {
        return res.status(400).json({state: "failed", message: error.message})        
    }
}

module.exports = {
    updatePassword,
    createOtpAndSendToMail,
    checkFromOtp
}