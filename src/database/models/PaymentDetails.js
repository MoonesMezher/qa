const { Schema, model, default: mongoose } = require("mongoose");

const PaymentDetails = model("PaymentDetails", new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        required: true
    }, 
    lastTokens: {
        type: Number,
        required: true
    }, 
    updatedTokens: {
        type: Number,
        required: true
    }, 
    offerId: {
        type: Schema.Types.ObjectId,
        ref: "Offer",
        required: true
    }, 
    payment_intent_id: {
        type: String,
        required: true
    }
}, { timestamps : true }));

module.exports = mongoose.model("PaymentDetails") || PaymentDetails;