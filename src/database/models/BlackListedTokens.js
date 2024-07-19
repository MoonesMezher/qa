const { Schema, model, default: mongoose } = require("mongoose");

const BlackListedTokens = model("BlackListedTokens", new Schema({
    token: {
        type: String
    }
}, { timestamps : true }));

module.exports = mongoose.model("BlackListedTokens") || BlackListedTokens;