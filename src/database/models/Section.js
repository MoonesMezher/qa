const { Schema, model, default: mongoose } = require("mongoose");

const Section = model("Section", new Schema({
    picture: {
        type: String,
    },
    name: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps : true }));

module.exports = mongoose.model("Section") || Section;