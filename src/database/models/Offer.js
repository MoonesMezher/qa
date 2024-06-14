const { Schema, model, default: mongoose } = require("mongoose");

const Offer = model("Offer", new Schema({
    name: {
        type: String,
        required: true
    },
    tokens: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    picture: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    }
}, { timestamps : true }));

module.exports = mongoose.model("Offer") || Offer;