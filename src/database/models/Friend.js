const { Schema, model, default: mongoose } = require("mongoose");

const friendSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String, 
        enum: ['pending', 'block', 'friend'], 
        default: 'pending'
    }
});

const Friend = model("Friend", new Schema({
    user_id : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    friends: {
        type: [friendSchema],
        default: []
    },
}, { timestamps : true }));

module.exports = mongoose.model("Friend") || Friend;