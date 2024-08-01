const express = require('express');
const router = express.Router();

// methods
const { getProfile, updateProfile, showTopUsersByExp, showTopUsersByExpDepandLastMonth, showTopUsersByExpDepandLastWeek, showTopUsersByExpDepandLastDay, updateScoreOfUser, updateExpAndTokensToUser, paysCoastOfGame, levelOfPlayerOnTheWorld, getAllUsersByNameWithFreindShipDetails } = require('../controllers/profileController');

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

router.get('/index/:id', [validateObjectId, requireAuth, authorize(["user", "guest", 'admin'])], levelOfPlayerOnTheWorld);

router.get('/search-users-by-name/name/:name', [requireAuth, authorize(["user", "guest", 'admin'])], getAllUsersByNameWithFreindShipDetails);

// PUT
router.put('/update', [requireAuth, authorize(["user"]), isImage], updateProfile);

router.put('/update-score', [requireAuth, authorize(["user", "guest", "admin"])], updateScoreOfUser);

router.put('/update-tokens-and-exp', [requireAuth, authorize(["user", "guest", "admin"])], updateExpAndTokensToUser);

router.put('/pays-coast', [requireAuth, authorize(["user", "guest", "admin"])], paysCoastOfGame);

module.exports = router;