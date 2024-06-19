const express = require('express');
const router = express.Router();

// Middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const { saveToken, createNotefication } = require('../controllers/noteficationController');

// routes

// POST
router.post('/save-token', [requireAuth], saveToken);

router.post('/create', [requireAuth, authorize(['admin'])], createNotefication);

module.exports = router