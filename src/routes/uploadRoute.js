const express = require('express');
const router = express.Router();

// methods
const { uploadImage, upload } = require('../controllers/uploadController');

// middlewares
// routes

// POST
router.post('/:folder', upload.single("image"), uploadImage);

module.exports = router;