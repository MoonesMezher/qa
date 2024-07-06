const express = require('express');
const router = express.Router();

// methods

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const { isImage } = require('../middlewares/checkFromImageMiddleware');
const { getAllCompetitions, createCompetition, updateCompetition, deleteCompetition, joinUser } = require('../controllers/competitionController');

// routes

// GET
router.get('/', [requireAuth, authorize(["user", "admin"])],getAllCompetitions);

// POST
router.post('/create', [requireAuth, authorize(["admin", "date-entry"]), isImage], createCompetition);

// PUT
router.put('/update/:id', [requireAuth, authorize(["admin", "date-entry"]), validateObjectId, isImage], updateCompetition);

router.put('/join/:id', [requireAuth, authorize(["user", "admin"]), validateObjectId], joinUser);

// DELETE
router.delete('/delete/:id', [requireAuth, authorize(["admin", "date-entry"]), validateObjectId], deleteCompetition);

module.exports = router;