const express = require('express');
const router = express.Router();

// methods

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const { isImage } = require('../middlewares/checkFromImageMiddleware');
const { getAllCompetitions, createCompetition, updateCompetition, deleteCompetition, joinUser, topUsersInCompetions, getAllTypesToCompetions, changeExpByCompetions, getStoredUsersToCompetition, getCompetionsDataToUser } = require('../controllers/competitionController');

// routes

// GET
router.get('/', [requireAuth, authorize(["user", "admin", 'guest'])],getAllCompetitions);

router.get('/top-users/:id', [requireAuth, validateObjectId, authorize(["user", "admin", 'guest'])],topUsersInCompetions);

router.get('/all-types', [requireAuth, authorize(["admin"])], getAllTypesToCompetions);

router.get('/stored-users/:id', [requireAuth, authorize(["admin", "user", "guest"]), validateObjectId], getStoredUsersToCompetition);

router.get('/info/user/:id', [requireAuth, authorize(["admin", "user", "guest"]), validateObjectId], getCompetionsDataToUser);

// POST
router.post('/create', [requireAuth, authorize(["admin", "date-entry"]), isImage], createCompetition);

// PUT
router.put('/update/:id', [requireAuth, authorize(["admin", "date-entry"]), validateObjectId, isImage], updateCompetition);

router.put('/join/:id', [requireAuth, authorize(["user","guest", "admin"]), validateObjectId], joinUser);

router.put('/change-exp', [requireAuth, authorize(["user","guest", "admin"])], changeExpByCompetions);

// DELETE
router.delete('/delete/:id', [requireAuth, authorize(["admin", "date-entry"]), validateObjectId], deleteCompetition);

module.exports = router;