const express = require('express');
const router = express.Router();

// methods
const { showOwnInvites } = require('../controllers/inviteController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');

// routes

// GET
router.get('/', [requireAuth, authorize(["admin","user","guest"])], showOwnInvites);

module.exports = router;