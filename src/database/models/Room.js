const { Schema, model, default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    score: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'waiting'
    }
});

const answerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: false
    }
});

const questionsSchema = new mongoose.Schema({
    section_id: {
        type: Schema.Types.ObjectId,
        ref: "Section",
    },
    category_ids: {
        type: [Schema.Types.ObjectId],
        ref: "Category",
    },
    user_ids: {
        type: [Schema.Types.ObjectId],
        ref: "User",
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    type: {
        type: String, 
        enum: ['normal', 'true-false', 'multipale'], 
    },
    text: {
        type: String,
        required: true
    },
    answers: { 
        type: [answerSchema], 
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

const Room = model("Room", new Schema({
    users: {
        type: [usersSchema],
    },
    questions: {
        type: [questionsSchema],
    },
    gameState: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'Online'
    },
    subject: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, { timestamps : true }));

module.exports = mongoose.model("Room") || Room;