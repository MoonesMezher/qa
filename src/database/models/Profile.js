const { Schema, model, default: mongoose } = require("mongoose");

const scoreSchema = new mongoose.Schema({
    speed: {
        type: Number,
        default: 0,
    },
    chain: {
        type: Number,
        default: 0
    },
    online: {
        type: Number,
        default: 0,
    },
    group: {
        type: Number,
        default: 0
    },
});

const Profile = model("Profile", new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    picture: {
        type: String,
        default: "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
    },
    tokens: {
        type: Number,
        default: 50
    },
    country: {
        type: String,
        default: "None",
    },
    exp: {
        type: Number,
        default: 0
    },
    description: { 
        type: String, 
        max: 255,
    },
    score: {
        type: scoreSchema
    }
}, { timestamps : true }))

module.exports = mongoose.model("Profile") || Profile