const { Schema, model, default: mongoose } = require("mongoose");

const Friend = model("Friend", new Schema({
    user_id : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    friends: {
        type: [Schema.Types.ObjectId],
        default: []
    },
}, { timestamps : true }));

module.exports = mongoose.model("Friend") || Friend;