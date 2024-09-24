const axios = require("axios");
const CustomerCard = require("../database/models/CustomerCard");
const Payment = require("../database/models/Payment");
const User = require("../database/models/User");
const retrieveOrCreateStripeCustomer = require("../helpers/payment");
const stripe = require('stripe')(process.env.STRIPE_KEY_TEST);


const addNewCard = async (req, res) => { 
    try {
        const { payment_method_id } = req.body;
        const paymentMethodId = payment_method_id;

        if(!payment_method_id) {
            return res.status(400).json({ state: 'failed',message: 'You must insert a payment method' });
        }

        // const stripeSecret = process.env.STRIPE_KEY_TEST; // Set your Stripe Secret Key
        const user = await User.findById(req.user._id); // Assume you have the user authenticated and available in req.user

        // Create or retrieve Stripe customer
        const customer = await retrieveOrCreateStripeCustomer(user);

        // Attach the payment method to the customer using Stripe API
        const response = await stripe.paymentMethods.attach(
            paymentMethodId,
            {
                customer: customer.id,
            }
        );

        const paymentMethod = response.data;

        if (paymentMethod.error) {
            return res.status(400).json({ state: 'failed',message: paymentMethod.error.message });
        }

        // Save the card information to your database
        const card = await CustomerCard.create({
            user_id: user._id,
            stripe_customer_id: customer.id,
            stripe_card_id: paymentMethod.id,
            last4: paymentMethod.card.last4,
            brand: paymentMethod.card.brand,
            exp_month: paymentMethod.card.exp_month,
            exp_year: paymentMethod.card.exp_year,
        });

        return res.status(200).json({ state: 'success',message: 'تم إضافة البطاقة بنجاح', card });
    } catch (error) {
        // console.error('Error adding card:', error);
        return res.status(400).json({ state: 'failed',message: error.message });
    }
}

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency, payment_method_id } = req.body;

        if(!amount) {
            return res.status(400).json({ state: 'failed',message: 'You must insert amount value' });
        }

        if(!currency) {
            return res.status(400).json({ state: 'failed',message: 'You must insert currency value' });
        }

        if(!payment_method_id) {
            return res.status(400).json({ state: 'failed',message: 'You must insert payment_method_id value' });
        }

        const user = await Payment.findOne({userId: req.user._id}); // Assuming user is authenticated and available in req.user

        if (!user || !user.stripe_customer_id) {
            return res.status(400).json({ state: 'failed',message: 'No Stripe customer ID found for the user' });
        }

    // Create a Payment Intent with manual confirmation
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert amount to the smallest currency unit
            currency: currency,
            payment_method: payment_method_id,
            confirmation_method: 'manual',
            confirm: true,
            customer: user.stripe_customer_id,
        });

        if (paymentIntent?.next_action?.redirect_to_url) {
            return res.status(200).json({
                state: 'success',
                data: {
                    client_secret: paymentIntent.client_secret,
                    next_action_url: paymentIntent.next_action.redirect_to_url.url,
                    payment_intent_id: paymentIntent.id,
                    status: paymentIntent.status,
                }
            });
        }

        return res.status(200).json({state: 'success', paymentIntent});
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message });
    }
}

module.exports = {
    addNewCard,
    createPaymentIntent
}




// Add a new card to the customer
// app.post('/add-card', async (req, res) => {
//   try {
//     const { payment_method_id } = req.body;
//     const user = req.user; // Assuming user is authenticated and available in req.user

//     // Retrieve or create Stripe customer
//     const customer = await retrieveOrCreateStripeCustomer(user);

//     // Attach the payment method to the customer
//     const paymentMethod = await stripe.paymentMethods.attach(payment_method_id, {
//       customer: customer.id,
//     });

//     // Save the card information to your database
//     const card = {
//       userId: user.id,
//       stripeCustomerId: customer.id,
//       stripeCardId: paymentMethod.id,
//       last4: paymentMethod.card.last4,
//       brand: paymentMethod.card.brand,
//       expMonth: paymentMethod.card.exp_month,
//       expYear: paymentMethod.card.exp_year,
//     };
//     // Save the card to your database here

//     res.status(201).json({ message: 'Card added successfully!', card });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Create a payment intent

// Complete the order
// app.post('/complete-order', async (req, res) => {
//   try {
//     const { payment_intent_id, order_details } = req.body;
//     const order = {}; // Assuming order_details is an object, populate it accordingly

//     // Retrieve the payment intent from Stripe
//     const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);

//     if (paymentIntent.status === 'succeeded') {
//       // Payment succeeded, proceed with creating a new order and payment records
//       const newOrder = {
//         userId: req.user.id, // Assuming user is authenticated
//         date: new Date(),
//         orderItems: order.cartproducts,
//         totalPrice: order.amount,
//         vatCost: order.vatcost,
//         shippingCost: order.shippingcost,
//         subtotal: order.subtotal,
//         shippingDetails: order.adressdetails,
//         store: order.store,
//         couponId: order.couponID,
//         couponTitle: order.coupontitle,
//         couponDiscountValue: order.couponDiscountvalue,
//         userNotes: '...',
//         orderStatus: 'completed',
//         paymentStatus: 'completed',
//         shippingStatus: 'pending',
//         paymentType: 'Stripe_credit_card',
//       };

//       // Save the order to your database

//       // Create a new payment record
//       const payment = {
//         orderId: newOrder.id,
//         userId: order.userID,
//         amount: order.amount,
//         description: 'Payment for order #' + newOrder.id,
//         status: 'completed',
//         paymentURL: '',
//         paymentURLId: paymentIntent.id,
//       };

//       // Save the payment record to your database

//       res.status(200).json({ message: 'Order completed successfully' });
//     } else {
//       res.status(400).json({ error: 'Payment not completed' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
