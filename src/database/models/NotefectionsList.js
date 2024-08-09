const { Schema, model, default: mongoose } = require("mongoose");

const NoteficationsList = model("NoteficationsList", new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
    },
    roomId: {
        type: Schema.Types.ObjectId
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

module.exports = mongoose.model("NoteficationsList") || NoteficationsList;