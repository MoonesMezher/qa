const { Schema, model, default: mongoose } = require("mongoose");

const OTP = model("OTP", new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pass: {
        type: String,
        required: true
    }
}, { timestamps : true }));

module.exports = mongoose.model("OTP") || OTP;