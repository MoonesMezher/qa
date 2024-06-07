const express = require('express');
const router = express.Router();

// methods
const { uploadImage } = require('../controllers/uploadController.js')
// middlewares
const { upload,  } = require('../middlewares/checkFromImageMiddleware');

// routes

// POST
router.post('/:folder', upload.single("picture"), uploadImage);

module.exports = router;