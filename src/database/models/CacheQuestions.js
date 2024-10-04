const { Schema, model, default: mongoose } = require("mongoose");

const CacheQuestions = model("CacheQuestions", new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    questions: {
        type: [Schema.Types.ObjectId],
    }
}, { timestamps : true }));

module.exports = mongoose.model("CacheQuestions") || CacheQuestions;