// const { default: axios } = require("axios");
const Payment = require("../database/models/Payment");
// const stripe = require('stripe')("sk_test_51PjpliAAv4Gjcb9s2Uxsi4qs6eAEEhriGvNMO7NMBoXwP7lKDH1ifr7eVQop9WraYNVfeYWbS3BcVYL6lTEfvsKC00QBNiHHDs")
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY_TEST);
// Function to retrieve or create a Stripe customer
const retrieveOrCreateStripeCustomer = async (user) => {
    try {
        const payment = await Payment.findOne({ userId: user._id })

        if(!payment) {
            const customer = await stripe.customers.create({
                name: user.username,
                email: user.email
            })

            if(customer?.id) {
                await Payment.create({ userId: user._id, stripe_customer_id: customer.id });
            }

            console.log("##@@##",customer);

            return customer;
        } else {
            const response = await stripe.customers.retrieve({
                id: payment.stripe_customer_id
            })

            return response.data;
        }
    } catch (error) {
        console.log("##@@##");
        console.log(error);
        throw new Error(error.message);        
    }
}

module.exports = retrieveOrCreateStripeCustomer;