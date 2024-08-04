const { Schema, model, default: mongoose } = require("mongoose");

const Request = model("Request", new Schema({
    from: {
        type: Schema.Types.ObjectId,
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        required: true
    },
}, { timestamps : true }));

module.exports = mongoose.model("Request") || Request;