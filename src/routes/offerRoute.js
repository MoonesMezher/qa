const express = require('express');
const router = express.Router();

// methods
const { showOffer, showOffers, createOffer, updateOffer, activateOffer, disactivateOffer, deleteOffer, addTokensToUserAfterBuyOffer, showOffersByWord } = require('../controllers/offerController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const { isImage } = require('../middlewares/checkFromImageMiddleware');

// routes

// GET
router.get('/', [requireAuth, authorize(["admin", "user", "guest"])], showOffers);

router.get('/:id', [validateObjectId, requireAuth, authorize(["admin", "user", "guest"])], showOffer);

router.get('/by-word/:word', [requireAuth, authorize(["admin", "user", "guest"])], showOffersByWord);

// POST
router.post('/', [requireAuth, authorize(["admin"]), isImage], createOffer);

// PUT
router.put('/add-tokens-to-user/offer/:id', [validateObjectId, requireAuth, authorize(["user"])], addTokensToUserAfterBuyOffer);

router.put('/:id', [validateObjectId ,requireAuth, authorize(["admin"]), isImage], updateOffer);

router.put('/activate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], activateOffer);

router.put('/disactivate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], disactivateOffer);

// DELETE
router.delete('/:id', [validateObjectId ,requireAuth, authorize(["admin"])], deleteOffer);

module.exports = router;