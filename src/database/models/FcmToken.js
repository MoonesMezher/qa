const { Schema, model, default: mongoose } = require("mongoose");

const FcmToken = model("FcmToken", new Schema({
    user_id : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fcmTokens: {
        type: [String],
    },
    role: {
        type: String,
        required: true
    }
}, { timestamps : true }));

module.exports = mongoose.model("FcmToken") || FcmToken;