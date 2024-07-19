const { Schema, model, default: mongoose } = require("mongoose");

const Token = model("Token", new Schema({
    user_id : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    token: {
        type: String,
    },
}, { timestamps : true }));

module.exports = mongoose.model("Token") || Token;