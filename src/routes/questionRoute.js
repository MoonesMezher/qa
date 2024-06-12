const express = require('express');
const router = express.Router();

// methods
const { showQuestion, showQuestions, showAllActiveQuestions, showAllNotActiveQuestions, showQuestionsByUser, showQuestionsByType, showQuestionsByWord, createQuestion, updateQuestion, activateQuestion, disactivateQuestion, deleteQuestion, showDataEntryQuestions, showQuestionsByTypeForOneUser, showQuestionsByTypeForOneUserWithFilter, showQuestionsForOneUserWithFilter } = require('../controllers/questionController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');
const { isImage } = require('../middlewares/checkFromImageMiddleware');
// routes

// GET
router.get('/page/:page', [validatePageParameter,requireAuth, authorize(["admin"])], showQuestions);

router.get('/to-data-entry/page/:page', [validatePageParameter,requireAuth, authorize(["data-entry"])], showDataEntryQuestions);

router.get('/active/page/:page', [validatePageParameter,requireAuth, authorize(["admin", "data-entry", "user", "guest"])], showAllActiveQuestions);

router.get('/not-active/page/:page', [validatePageParameter,requireAuth, authorize(["admin"])], showAllNotActiveQuestions);

router.get('/type/:type/page/:page', [validateObjectId, validatePageParameter,requireAuth, authorize(["admin"])], showQuestionsByType);

router.get('/id/:id/type/:type/page/:page', [validateObjectId, validatePageParameter,requireAuth, authorize(["admin"])], showQuestionsByTypeForOneUser);

router.get('/id/:id/type/:type/word/:word/page/:page', [validateObjectId, validatePageParameter, requireAuth, authorize(["admin"])], showQuestionsByTypeForOneUserWithFilter);

router.get('/id/:id/word/:word/page/:page', [validateObjectId, validatePageParameter, requireAuth, authorize(["admin"])], showQuestionsForOneUserWithFilter);

router.get('/word/:word/page/:page', [validatePageParameter,requireAuth, authorize(["admin"])], showQuestionsByWord);

router.get('/user/:id/page/:page', [validateObjectId, validatePageParameter,requireAuth, authorize(["admin"])], showQuestionsByUser);

router.get('/:id', [validateObjectId,requireAuth, authorize(["admin", "user", "guest", "data-entry"])], showQuestion);

// POST
router.post('/', [requireAuth, authorize(["admin", "data-entry"], isImage)], createQuestion);

// PUT
router.put('/activate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], activateQuestion);

router.put('/disactivate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], disactivateQuestion);

router.put('/:id', [validateObjectId ,requireAuth, authorize(["admin", "data-entry"]), isImage], updateQuestion);

// DELETE
router.delete('/:id', [validateObjectId ,requireAuth, authorize(["admin", "data-entry"])], deleteQuestion);

module.exports = router;