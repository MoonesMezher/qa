const { Schema, model, default: mongoose } = require("mongoose");

const Payment = model("Payment", new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    stripe_customer_id: {
        type: String,
        required: true
    }
}, { timestamps : true }));

module.exports = mongoose.model("Payment") || Payment;