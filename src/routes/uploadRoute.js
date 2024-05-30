const express = require('express');
const router = express.Router();

// methods
const { upload, uploadImage } = require('../controllers/uploadConrtoller');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');

// Routes

// POST
router.post('/', [requireAuth, authorize(["user", "admin", "data-entry"]), upload.single('image')], uploadImage);

module.exports = router;