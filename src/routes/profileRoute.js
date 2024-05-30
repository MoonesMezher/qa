const express = require('express');
const router = express.Router();

// methods
const { getProfile, updateProfile } = require('../controllers/profileController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');

// routes

// GET
router.get('/:id', [validateObjectId, requireAuth, authorize(["user", "guest"])], getProfile);

// PUT
router.put('/update/:id', [validateObjectId, requireAuth, authorize(["user"])], updateProfile);

module.exports = router;