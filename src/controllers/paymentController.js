const CustomerCard = require("../database/models/CustomerCard");
const Payment = require("../database/models/Payment");
const Profile = require("../database/models/Profile");
const Offer = require("../database/models/Offer");
const retrieveOrCreateStripeCustomer = require("../helpers/payment");
const PaymentDetails = require("../database/models/PaymentDetails");
const User = require("../database/models/User");
// const stripe = require('stripe')(process.env.STRIPE_KEY_TEST);
const stripe = require('stripe')(process.env.STRIPE_KEY_REAL);

const createPaymentMethod = async (req, res) => {
    try {
        const { cardNumber, expMonth, expYear, cvc } = req.body;

        if(!cardNumber || !expMonth || !expYear || !cvc) {
            return res.status(400).json({ state: 'failed', message: 'These data must be required { cardNumber, expMonth, expYear, cvc }' });
        }

        const paymentMethod = await stripe.tokens.create({
            card: {
                number: cardNumber,
                exp_month: expMonth,
                exp_year: expYear,
                cvc: cvc,
            },
        });

        return res.status(200).json({ state: 'success', paymentMethod: paymentMethod });
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message });
    }
}
const addNewCard = async (req, res) => { 
    try {
        const { payment_method_id } = req.body;
        const paymentMethodId = payment_method_id;

        if(!payment_method_id) {
            return res.status(400).json({ state: 'failed',message: 'You must insert a payment method' });
        }

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

        const paymentMethod = response;

        if (paymentMethod?.error) {
            return res.status(400).json({ state: 'failed',message: paymentMethod.error.message });
        }

        const existedCard = await CustomerCard.findOne({user_id: user._id, stripe_card_id: paymentMethod.id});

        if(existedCard) {
            return res.status(400).json({ state: 'failed',message: 'لديك هذه البطاقة بالفعل لا يمكنك إضافتها مرة أخرى' });
        }

        let image;

        if(paymentMethod.card.brand === 'visa') {
            image = 'uploads/cards/visa.webp'
        } else if(paymentMethod.card.brand === 'mastercard') {
            image = 'uploads/cards/master.webp'
        } else {
            image = 'uploads/cards/default.webp'
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
            image,
        });

        return res.status(200).json({ state: 'success',message: 'تم إضافة البطاقة بنجاح', card });
    } catch (error) {
        // console.error('Error adding card:', error);
        return res.status(400).json({ state: 'failed',message: error.message });
    }
}

const getAllUserCards = async (req, res) => {
    try {
        const user = req.user._id;
        
        const cards = await CustomerCard.find({
            user_id: user,
        });

        return res.status(200).json({ state: 'success',message: 'تم إرجاع كافة البطاقات بنجاح', cards });
    } catch (error) {
        // console.error('Error adding card:', error);
        return res.status(400).json({ state: 'failed',message: error.message });
    }
}

const getAllPaymentsHistory = async (req, res) => {
    try {        
        const paymentsHistory = await PaymentDetails.find({});

        return res.status(200).json({ state: 'success',message: 'تم إرجاع كافة عمليات الدفع السابقة بنجاح', paymentsHistory });
    } catch (error) {
        // console.error('Error adding card:', error);
        return res.status(400).json({ state: 'failed',message: error.message });
    }
}

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency, payment_method_id, googlePay, applePay } = req.body;

        if(!amount) {
            return res.status(400).json({ state: 'failed',message: 'You must insert amount value' });
        }

        if(!currency) {
            return res.status(400).json({ state: 'failed',message: 'You must insert currency value' });
        }

        if(!payment_method_id && !googlePay && !applePay) {
            return res.status(400).json({ state: 'failed',message: 'You must insert payment_method_id or googlePay or applePay value' });
        }

        const user = await Payment.findOne({userId: req.user._id}); // Assuming user is authenticated and available in req.user

        let customer;

        if (!user || !user.stripe_customer_id) {
            customer = await retrieveOrCreateStripeCustomer(req.user);
            // return res.status(400).json({ state: 'failed',message: 'No Stripe customer ID found for the user' });
        }

        // Create a Payment Intent with manual confirmation
        let paymentIntent;
        if(payment_method_id) {
            console.log(1)
            paymentIntent = await stripe.paymentIntents.create({
                amount: Math.round(amount * 100), // Convert amount to the smallest currency unit
                currency: currency,
                payment_method: payment_method_id,
                // confirmation_method: 'manual',
                confirm: true,
                customer: user.stripe_customer_id,
                return_url: 'https://quiz-app2-3q4e.onrender.com/game/api/payments/check',
                automatic_payment_methods: {
                    enabled: true,
                    allow_redirects: 'never'
                }
            });
        } else {
            console.log(2)

            console.log(customer);

            paymentIntent = await stripe.paymentIntents.create({
                amount: Math.round(amount * 100),
                currency: currency,
                // confirm: true,
                customer: customer?.id,
                // return_url: 'https://quiz-app2-3q4e.onrender.com/game/api/payments/check',
                automatic_payment_methods: {
                    enabled: true,
                    allow_redirects: 'never'
                }
                // payment_method: paymentMethod.id,
            })

            // const clientSecret = paymentIntent.client_secret;

            // if(googlePay) {
            //     const googlePayPaymentMethod = await stripe.googlePay.createPaymentMethod({
            //         clientSecret: clientSecret,
            //         paymentIntentId: paymentIntent.id,
            //     });
                
            //     // Confirm the payment intent with the Google Pay payment method
            //     const confirmedPaymentIntent = await stripe.paymentIntents.confirm(paymentIntent.id, {
            //         payment_method: googlePayPaymentMethod.id,
            //     });
            // } else {
            //     const applePayPaymentMethod = await stripe.applePay.createPaymentMethod({
            //         clientSecret: clientSecret,
            //         paymentIntentId: paymentIntent.id,
            //     });
    
            //     // Confirm the payment intent with the Apple Pay payment method
            //     const confirmedPaymentIntent = await stripe.paymentIntents.confirm(paymentIntent.id, {
            //         payment_method: applePayPaymentMethod.id,
            //     });
            // }
            // Use the client secret to collect payment information from the customer using Apple Pay

            // console.log(paymentIntent);
        }

        if (paymentIntent?.next_action?.redirect_to_url) {
            return res.status(200).json({
                state: 'next',
                data: {
                    client_secret: paymentIntent.client_secret,
                    next_action_url: paymentIntent.next_action.redirect_to_url.url,
                    payment_intent_id: paymentIntent.id,
                    // status: paymentIntent.status,
                }
            });
        }

        return res.status(200).json({state: 'success', data: {
            client_secret: paymentIntent?.client_secret || 'Not exist',
            next_action_url: 'no url',
            payment_intent_id: paymentIntent.id,
        }});
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message });
    }
}

const completeOrder = async (req, res) => {
    try {
        const { payment_intent_id, offerId } = req.body;

        if(!payment_intent_id) {
            return res.status(400).json({ state: 'failed',message: 'You must insert payment_intent_id' });
        }

        if(!offerId) {
            return res.status(400).json({ state: 'failed',message: 'You must insert offerId' });
        }

        const offer = await Offer.findById(offerId)

        if(!offer) {
            return res.status(400).json({ state: 'failed',message: 'This offer does not exist' });
        }

        const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);
    
        if (paymentIntent.status === 'succeeded') {
          // Payment succeeded, update the user's tokens
            const user = await Profile.findOne({user_id: req.user._id});
            const lastTokens = user.tokens;
            user.tokens += offer?.tokens; // Update the user's tokens
            await user.save();

            const userDetails = await User.findById(req.user._id)

            await PaymentDetails.create({ userId: req.user._id, profileId: user._id, email: userDetails.email , username: userDetails.username, lastTokens, updatedTokens: user.tokens, offerId, offerPrice: offer.price, payment_intent_id });

            const userData = {
                _id: req.user._id,
                username: userDetails.username,
                email: userDetails.email,
                password: userDetails.password,
                verified: userDetails.verified,
                active: userDetails.active,
                isFree: userDetails.isFree,
                description: user.description, 
                country: user.country, 
                picture: user.picture,
                tokens: user.tokens,
                exp: user.exp,
                score: user.score, 
                isGuest: false                       
            }
    
            return res.status(200).json({ state: 'success',message: 'Order completed successfully', userData });
        } else if(paymentIntent.status === 'requires_confirmation'){
            const confirmResult = await stripe.paymentIntents.confirm(payment_intent_id);

            if (confirmResult.status === 'succeeded') {
                const user = await Profile.findOne({user_id: req.user._id});
                const lastTokens = user.tokens;
                user.tokens += offer?.tokens; // Update the user's tokens
                await user.save();

                const userDetails = await User.findById(req.user._id)

                await PaymentDetails.create({ userId: req.user._id, profileId: user._id, email: userDetails.email , username: userDetails.username, lastTokens, updatedTokens: user.tokens, offerId, offerPrice: offer.price, payment_intent_id });

                const userData = {
                    _id: req.user._id,
                    username: userDetails.username,
                    email: userDetails.email,
                    password: userDetails.password,
                    verified: userDetails.verified,
                    active: userDetails.active,
                    isFree: userDetails.isFree,
                    description: user.description, 
                    country: user.country, 
                    picture: user.picture,
                    tokens: user.tokens,
                    exp: user.exp,
                    score: user.score, 
                    isGuest: false                       
                }
        
                return res.status(200).json({ state: 'success',message: 'Order completed successfully', userData });
            } else {
                return res.status(400).json({ state: 'failed',message: 'Payment not completed' });
            }
        } else {
            return res.status(400).json({ state: 'failed',message: 'Payment not completed' });
        }
    } catch (error) {
        return res.status(400).json({ state: 'failed',message: error.message });
    }
}

// Your Express handler function
const paymentNextAction = async (req, res) => {
    try {
        const paymentIntentId = req.query.payment_intent;
        const clientSecret = req.query.payment_intent_client_secret;

        // console.log(req.query, paymentIntentId)

        if(!paymentIntentId) {
            return res.send(`
                <script>
                    window.flutter_inappwebview.callHandler('paymentStatus', JSON.stringify({
                        status: 'error',
                        message: 'Payment failed.',
                    }));
                </script>
            `);
        }
    
        // Function to make the HTTPS request to Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
    
        if (paymentIntent.status === 'succeeded') {
            return res.send(`
                <script>
                    window.flutter_inappwebview.callHandler('paymentStatus', JSON.stringify({
                        status: 'success',
                        message: 'Payment was successful.'
                    }));
                </script>
            `);
        } else if (paymentIntent.status === 'requires_confirmation') {
            const confirmResult = await stripe.paymentIntents.retrieve(paymentIntentId);

            if (confirmResult?.status === 'succeeded') {
                return res.send(`
                    <script>
                        window.flutter_inappwebview.callHandler('paymentStatus', JSON.stringify({
                            status: 'success',
                            message: 'Payment was confirmed successfully.'
                        }));
                    </script>
                `);
            } else if (confirmResult?.status === 'requires_action') {
                return res.send(`
                    <script>
                        window.flutter_inappwebview.callHandler('paymentStatus', JSON.stringify({
                            status: 'pending',
                            message: 'Payment requires further action.'
                        }));
                    </script>
                `);
            } else {
                return res.send(`
                    <script>
                        window.flutter_inappwebview.callHandler('paymentStatus', JSON.stringify({
                            status: 'error',
                            message: 'Payment confirmation failed.',
                        }));
                    </script>
                `);
            }
        } else {
            return res.send(`
                <script>
                    window.flutter_inappwebview.callHandler('paymentStatus', JSON.stringify({
                        status: 'error',
                        message: 'Payment failed.',
                    }));
                </script>
            `);
        }

    } catch (err) {
        return res.send(`
            <script>
                window.flutter_inappwebview.callHandler('paymentStatus', JSON.stringify({
                    status: 'server error',
                    message: 'Payment failed.',
                }));
            </script>
        `);
    }
}

const completeOrderToChangeUserAccountToPaid = async (req, res) => {
    try {
        const { payment_intent_id } = req.body;

        if(!payment_intent_id) {
            return res.status(400).json({ state: 'failed',message: 'You must insert payment_intent_id' });
        }

        const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);
    
        if (paymentIntent.status === 'succeeded') {
          // Payment succeeded, update the user's tokens
            const userr = await User.findByIdAndUpdate(req.user._id, { isFree: false });
            await userr.save();

            const userDetails = await User.findById(req.user._id);
            const user = await Profile.findOne({user_id: req.user._id})

            const userData = {
                _id: req.user._id,
                username: userDetails.username,
                email: userDetails.email,
                password: userDetails.password,
                verified: userDetails.verified,
                active: userDetails.active,
                isFree: userDetails.isFree,
                description: user?.description, 
                country: user?.country, 
                picture: user?.picture,
                tokens: user?.tokens,
                exp: user?.exp,
                score: user?.score, 
                isGuest: false                       
            }
    
            return res.status(200).json({ state: 'success',message: 'Order completed successfully', userData });
        } else if(paymentIntent.status === 'requires_confirmation'){
            const confirmResult = await stripe.paymentIntents.confirm(payment_intent_id);

            if (confirmResult.status === 'succeeded') {
                const userr = await User.findByIdAndUpdate(req.user._id, { isFree: false });
                await userr.save();

                const userDetails = await User.findById(req.user._id);
                const user = await Profile.findOne({userId: req.user._id});

                // await PaymentDetails.create({ userId: req.user._id, profileId: user._id, email: userDetails.email , username: userDetails.username, lastTokens, updatedTokens: user.tokens, offerId:0, offerPrice: 0, payment_intent_id });

                const userData = {
                    _id: req.user._id,
                    username: userDetails.username,
                    email: userDetails.email,
                    password: userDetails.password,
                    verified: userDetails.verified,
                    active: userDetails.active,
                    isFree: userDetails.isFree,
                    description: user.description, 
                    country: user.country, 
                    picture: user.picture,
                    tokens: user.tokens,
                    exp: user.exp,
                    score: user.score, 
                    isGuest: false                       
                }
        
                return res.status(200).json({ state: 'success',message: 'Order completed successfully', userData });
            } else {
                return res.status(400).json({ state: 'failed',message: 'Payment not completed' });
            }
        } else {
            return res.status(400).json({ state: 'failed',message: 'Payment not completed' });
        }
    } catch (error) {
        return res.status(400).json({ state: 'failed',message: error.message });
    }
}

module.exports = {
    addNewCard,
    createPaymentIntent,
    completeOrder,
    getAllUserCards,
    getAllPaymentsHistory,
    paymentNextAction,
    createPaymentMethod,
    completeOrderToChangeUserAccountToPaid
}
