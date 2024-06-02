const { Schema, model, default: mongoose } = require("mongoose");

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

const Question = model("Question", new Schema({
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
}, { timestamps : true }))

module.exports = mongoose.model("Question") || Question