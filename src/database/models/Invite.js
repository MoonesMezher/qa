const { Schema, model, default: mongoose } = require("mongoose");

const Invite = model("Invite", new Schema({
    user_id: {
        type: [Schema.Types.ObjectId],
    },
    roomId: {
        typee: [Schema.Types.ObjectId]
    },
    user: {
        type: String
    },
    title: {
        type: String
    },
}, { timestamps : true }));

module.exports = mongoose.model("Invite") || Invite;