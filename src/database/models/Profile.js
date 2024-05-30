const { Schema, model, default: mongoose } = require("mongoose");

const Profile = model("Profile", new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    picture: {
        type: String,
        default: "default.png"
    },
    tokens: {
        type: String,
        default: "50"
    },
    country: {
        type: String,
        default: "None",
    },
    exp: {
        type: String,
        default: "0"
    },
    description: { 
        type: String, 
        max: 255,
    },
}, { timestamps : true }))

module.exports = mongoose.model("Profile") || Profile