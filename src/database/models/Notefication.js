const { Schema, model, default: mongoose } = require("mongoose");

const Notefication = model("Notefication", new Schema({
    title : {
        type: String,
    },
    body: {
        type: String,
    },
}, { timestamps : true }));

module.exports = mongoose.model("Notefication") || Notefication;