const { Schema, model, default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    exp: {
        type: Number,
        default: 0
    }
});

const Competition = model("Competition", new Schema({
    type_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    picture: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    users: {
        type: [usersSchema]
    },
    state: {
        type: String,
        default: 'waiting'
    }
}, { timestamps : true }));

module.exports = mongoose.model("Competition") || Competition;