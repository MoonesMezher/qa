const express = require('express');
const router = express.Router();

// methods
const { getProfile, updateProfile, showTopUsersByExp, showTopUsersByExpDepandLastMonth, showTopUsersByExpDepandLastWeek, showTopUsersByExpDepandLastDay } = require('../controllers/profileController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const { isImage } = require('../middlewares/checkFromImageMiddleware');

// routes

// GET
router.get('/top-users', [requireAuth, authorize(["admin", "user"])], showTopUsersByExp);

router.get('/top-users/last-month', [requireAuth, authorize(["admin", "user"])], showTopUsersByExpDepandLastMonth);

router.get('/top-users/last-week', [requireAuth, authorize(["admin", "user"])], showTopUsersByExpDepandLastWeek);

router.get('/top-users/last-day', [requireAuth, authorize(["admin", "user"])], showTopUsersByExpDepandLastDay);

router.get('/:id', [validateObjectId, requireAuth, authorize(["user", "guest"])], getProfile);

// PUT
router.put('/update/:id/', [validateObjectId, requireAuth, authorize(["user"]), isImage], updateProfile);

module.exports = router;