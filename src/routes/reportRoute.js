const express = require('express');
const router = express.Router();

// Middlewares
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const { getReports, getReport, createReport, readReport, replayReport } = require('../controllers/reportController');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');

// routes

// GET
router.get('/page/:page', [validatePageParameter], getReports);

router.get('/:id', [validateObjectId, requireAuth, authorize(['admin', "data-entry"])], getReport);

// POST
router.post('/create', [requireAuth, authorize(['user', "guest"])], createReport);

router.post('/replay/report-id/:id', [validateObjectId, requireAuth, authorize(['admin', "data-entry"])], replayReport);

// PUT
router.put('/mark-as-read/:id', [validateObjectId, requireAuth, authorize(['admin', "data-entry"])], readReport)

module.exports = router