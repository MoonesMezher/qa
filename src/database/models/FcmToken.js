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
}, { timestamps : true }));

module.exports = mongoose.model("FcmToken") || FcmToken;