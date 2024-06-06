const { Schema, model, default: mongoose } = require("mongoose");

const Report = model("Report", new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    question_id: {
        type: Schema.Types.ObjectId,
        ref: "Question",
        required: true
    },
    text: {
        type: String,
        required: true
    },
    ecm_token: {
        type: String,
        default: ""
    }
}, { timestamps : true }));

module.exports = mongoose.model("Report") || Report;