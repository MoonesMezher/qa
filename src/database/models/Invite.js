const { Schema, model, default: mongoose } = require("mongoose");

const Invite = model("Invite", new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
    },
    roomId: {
        type: String
    },
    user: {
        type: String
    },
    title: {
        type: String
    },
    read:{
        type: Boolean,
        default: false
    },
    type: {
        type: String
    },
    img: {
        type: String
    }
}, { timestamps : true }));

module.exports = mongoose.model("Invite") || Invite;