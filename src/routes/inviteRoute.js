const express = require('express');
const router = express.Router();

// methods
const { showOwnInvites, readInvite, cancelInvite } = require('../controllers/inviteController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');

// routes

// GET
router.get('/', [requireAuth, authorize(["admin","user","guest"])], showOwnInvites);

// PUT
router.put('/read/:id', [validateObjectId,requireAuth, authorize(["admin","user","guest"])], readInvite);

// DELETE
router.delete('/cancel/:id', [validateObjectId,requireAuth, authorize(["admin","user","guest"])], cancelInvite);

module.exports = router;