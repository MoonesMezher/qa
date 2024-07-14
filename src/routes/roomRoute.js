const express = require('express');
const router = express.Router();

const { joinToRoom, deleteAllRooms } = require('../controllers/roomController');

// Middlewares
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');

// routes

// PUT
router.put('/search-game', [requireAuth, authorize(['admin', "user", "guest"])], joinToRoom)

// DELETE
router.delete('/delete-all', requireAuth, deleteAllRooms)

module.exports = router