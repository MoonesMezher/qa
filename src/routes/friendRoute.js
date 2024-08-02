const express = require('express');
const router = express.Router();

// methods
const { getAllFriends, getAllFriendRequests, addFriend, cancelFriendRequest, acceptFriendRequest, cancelAllFriendRequests, acceptAllFriendRequests, deleteFriend, unSendFriendRequest } = require('../controllers/friendController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');

// routes

// GET
router.get('/page/:page', [validatePageParameter, requireAuth, authorize(["admin","user","guest"])], getAllFriends);

router.get('/requests/page/:page', [validatePageParameter, requireAuth, authorize(["admin","user","guest"])], getAllFriendRequests);

// PUT
router.put('/add-friend/:userId', [requireAuth, authorize(["admin","user","guest"])], addFriend);

router.put('/accept-request/:userId', [requireAuth, authorize(["admin","user","guest"])], acceptFriendRequest);

router.put('/cancel-request/:userId', [requireAuth, authorize(["admin","user","guest"])], cancelFriendRequest);

router.put('/unsend-request/:userId', [requireAuth, authorize(["admin","user","guest"])], unSendFriendRequest);

router.put('/accept-all-requests', [requireAuth, authorize(["admin","user","guest"])], acceptAllFriendRequests);

router.put('/cancel-all-requests', [requireAuth, authorize(["admin","user","guest"])], cancelAllFriendRequests);

// DELETE
router.delete('/delete/:userId', [requireAuth, authorize(["admin","user","guest"])], deleteFriend);

module.exports = router;