const express = require('express');
const router = express.Router();

// methods
const { getQuestionsToSpeedGame, getQuestionsToChainGame } = require('../controllers/gameController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');

// routes

// GET
router.get('/generate-for-speed-game', [requireAuth, authorize(["admin", "user", "guest"])], getQuestionsToSpeedGame);

router.get('/generate-for-chain-game', [requireAuth, authorize(["admin", "user", "guest"])], getQuestionsToChainGame);

module.exports = router;