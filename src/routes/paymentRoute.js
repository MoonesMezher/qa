// const axios = require('axios');
// const { check, validationResult } = require('express-validator');
// const { authenticate } = require('../middleware/authenticate'); // Your authentication middleware
// const CustomerCard = require('../models/CustomerCard'); // Your CustomerCard model

// const router = express.Router();

// // Function to retrieve or create a Stripe customer
// async function retrieveOrCreateStripeCustomer(user, stripeSecret) {
//     if (!user.stripe_customer_id) {
//         try {
//             // Create a new Stripe customer
//             const response = await axios.post(
//                 'https://api.stripe.com/v1/customers',
//                 {
//                     name: user.name,
//                     email: user.email,
//                 },
//                 {
//                     headers: {
//                         Authorization: Bearer ${stripeSecret},
//                     },
//                 }
//             );

//             const customer = response.data;

//             // Save the customer ID to the user's record
//             user.stripe_customer_id = customer.id;
//             await user.save();

//             return customer;
//         } catch (error) {
//             console.error('Error creating Stripe customer:', error);
//             throw new Error('Unable to create Stripe customer');
//         }
//     } else {
//         try {
//             // Retrieve existing Stripe customer
//             const response = await axios.get(
//                 https://api.stripe.com/v1/customers/${user.stripe_customer_id},
//                 {
//                     headers: {
//                         Authorization: Bearer ${stripeSecret},
//                     },
//                 }
//             );

//             return response.data;
//         } catch (error) {
//             console.error('Error retrieving Stripe customer:', error);
//             throw new Error('Unable to retrieve Stripe customer');
//         }
//     }
// }

// // Route to add a new card
// router.post(
//     '/add-new-card',
//     [
//         authenticate, // Middleware' to authenticate the user
//         check('payment_method_id')
//             .not()
//             .isEmpty()
//             .withMessage('Payment method ID is required'),
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const paymentMethodId = req.body.payment_method_id;
//         const stripeSecret = process.env.STRIPE_SECRET_KEY; // Set your Stripe Secret Key

//         try {
//             const user = req.user; // Assume you have the user authenticated and available in req.user

//             // Create or retrieve Stripe customer
//             const customer = await retrieveOrCreateStripeCustomer(user, stripeSecret);

//             // Attach the payment method to the customer using Stripe API
//             const response = await axios.post(
//                 https://api.stripe.com/v1/payment_methods/${paymentMethodId}/attach,
//                 customer=${customer.id},
//                 {
//                     auth: {
//                         username: stripeSecret,
//                         password: '',
//                     },
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                     },
//                 }
//             );

//             const paymentMethod = response.data;

//             if (paymentMethod.error) {
//                 return res.status(500).json({ error: paymentMethod.error.message });
//             }

//             // Save the card information to your database
//             const card = await CustomerCard.create({
//                 user_id: user.id,
//                 stripe_customer_id: customer.id,
//                 stripe_card_id: paymentMethod.id,
//                 last4: paymentMethod.card.last4,
//                 brand: paymentMethod.card.brand,
//                 exp_month: paymentMethod.card.exp_month,
//                 exp_year: paymentMethod.card.exp_year,
//             });

//             return res.status(201).json({ message: 'Card added successfully!', card });
//         } catch (error) {
//             console.error('Error adding card:', error);
//             return res.status(500).json({ error: error.message });
//         }
//     }
// );

// module.exports = router;