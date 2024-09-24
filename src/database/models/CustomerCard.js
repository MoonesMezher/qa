const { Schema, model, default: mongoose } = require("mongoose");

const CustomerCard = model("CustomerCard", new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    stripe_customer_id: {
        type: String,
    },
    stripe_card_id: {
        type: String,
    },
    last4: {
        type: String,
    },
    brand: {
        type: String,
    },
    exp_month: {
        type: String,
    },
    exp_year: {
        type: String,
    },
}, { timestamps : true }));

module.exports = mongoose.model("CustomerCard") || CustomerCard;