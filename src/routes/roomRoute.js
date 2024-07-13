const express = require('express');
const router = express.Router();

const { joinToRoom } = require('../controllers/roomController');

// Middlewares
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');

// routes

// PUT
router.put('/search-game', [requireAuth, authorize(['admin', "user", "guest"])], joinToRoom)

module.exports = router