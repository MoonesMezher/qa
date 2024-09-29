const express = require('express');
const router = express.Router();

// methods
const { addNewCard, createPaymentIntent, completeOrder, getAllUserCards, getAllPaymentsHistory, paymentNextAction, createPaymentMethod } = require('../controllers/paymentController');

// middlewares
const requireAuth = require('../middlewares/requireAuth')
const authorize = require('../middlewares/roleMiddleware');
const { default: Stripe } = require('stripe');


router.get('/', async (req, res) => { 
    const customers = await Stripe(process.env.STRIPE_KEY_TEST).customers.list();

    return res.json({customers})
})

// Route to add a new card

// GET
router.get('/all-cards', [requireAuth, authorize(["user"])], getAllUserCards);

router.get('/all-payments-history', [requireAuth, authorize(["admin"])], getAllPaymentsHistory);

router.get('/check', paymentNextAction);

// POST

router.post('/create-payment-method', [requireAuth, authorize(["user"])], createPaymentMethod);

router.post('/add-new-card', [requireAuth, authorize(["user"])], addNewCard);

router.post('/create-payment-intent', [requireAuth, authorize(["user"])], createPaymentIntent);

router.post('/complete-order', [requireAuth, authorize(["user"])], completeOrder);

module.exports = router;