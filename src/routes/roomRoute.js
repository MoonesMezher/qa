const express = require('express');
const router = express.Router();

const { joinToRoom, deleteAllRooms, createNewRoomInGroupGame, joinToRoomInGroupGame, joinToRoomInOnlineGame, makeAnInviteToGame, createNewRoomInOnlineGame } = require('../controllers/roomController');

// Middlewares
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');

// routes

// POST
router.post('/create-group-game', [requireAuth, authorize(['admin', "user", "guest"])], createNewRoomInGroupGame)

router.post('/create-online-game', [requireAuth, authorize(['admin', "user", "guest"])], createNewRoomInOnlineGame)

router.post('/invite-to-game', [requireAuth, authorize(['admin', "user", "guest"])], makeAnInviteToGame)

// PUT
router.put('/search-game', [requireAuth, authorize(['admin', "user", "guest"])], joinToRoom)

router.put('/join-to-group-game/:roomId', [requireAuth, authorize(['admin', "user", "guest"])], joinToRoomInGroupGame)

router.put('/join-to-online-game/:roomId', [requireAuth, authorize(['admin', "user", "guest"])], joinToRoomInOnlineGame)

// DELETE
router.delete('/delete-all', requireAuth, deleteAllRooms)

module.exports = router