const { Schema, model, default: mongoose } = require("mongoose");

const Category = model("Category", new Schema({
    section_id : {
        type: Schema.Types.ObjectId,
        ref: "Section",
        required: true
    },
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

module.exports = mongoose.model("Category") || Category;