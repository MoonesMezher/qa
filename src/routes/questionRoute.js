const express = require('express');
const router = express.Router();

// methods
const { showQuestion, showQuestions, showAllActiveQuestions, showAllNotActiveQuestions, showQuestionsByUser, showQuestionsByType, showQuestionsByWord, createQuestion, updateQuestion, activateQuestion, disactivateQuestion, deleteQuestion, showDataEntryQuestions, showQuestionsByTypeForOneUser, showQuestionsByTypeForOneUserWithFilter, showQuestionsForOneUserWithFilter, showQuestionsByCategory, showQuestionsByCategoryAndWord, showQuestionsByCategoryAndType, showQuestionsByCategoryAndTypeAndWord } = require('../controllers/questionController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');
const { isImage } = require('../middlewares/checkFromImageMiddleware');
// routes

// GET
router.get('/page/:page', [validatePageParameter,requireAuth], showQuestions);

router.get('/to-data-entry/page/:page', [validatePageParameter,requireAuth], showDataEntryQuestions);

router.get('/active/page/:page', [validatePageParameter,requireAuth], showAllActiveQuestions);

router.get('/not-active/page/:page', [validatePageParameter,requireAuth], showAllNotActiveQuestions);

router.get('/type/:type/page/:page', [validateObjectId, validatePageParameter,requireAuth], showQuestionsByType);

router.get('/id/:id/type/:type/page/:page', [validateObjectId, validatePageParameter,requireAuth], showQuestionsByTypeForOneUser);

router.get('/id/:id/type/:type/word/:word/page/:page', [validateObjectId, validatePageParameter, requireAuth], showQuestionsByTypeForOneUserWithFilter);

router.get('/id/:id/word/:word/page/:page', [validateObjectId, validatePageParameter, requireAuth], showQuestionsForOneUserWithFilter);

router.get('/word/:word/page/:page', [validatePageParameter,requireAuth], showQuestionsByWord);

router.get('/user/:id/page/:page', [validateObjectId, validatePageParameter,requireAuth], showQuestionsByUser);

router.get('/by-category/section/:section/category/:category/page/:page', [validatePageParameter,requireAuth], showQuestionsByCategory);

router.get('/by-category-and-word/section/:section/category/:category/word/:word/page/:page', [validatePageParameter,requireAuth], showQuestionsByCategoryAndWord);

router.get('/by-category-and-type/section/:section/category/:category/type/:type/page/:page', [validatePageParameter,requireAuth], showQuestionsByCategoryAndType);

router.get('/by-category-and-type-and-word/section/:section/category/:category/type/:type/word/:word/page/:page', [validatePageParameter,requireAuth], showQuestionsByCategoryAndTypeAndWord);

router.get('/:id', [validateObjectId,requireAuth], showQuestion);

// POST
router.post('/', [requireAuth, authorize(["admin", "data-entry"]),isImage], createQuestion);

// PUT
router.put('/activate/:id', [validateObjectId ,requireAuth, authorize(["admin", "data-entry"])], activateQuestion);

router.put('/disactivate/:id', [validateObjectId ,requireAuth, authorize(["admin", "data-entry"])], disactivateQuestion);

router.put('/:id', [validateObjectId ,requireAuth, authorize(["admin", "data-entry"]), isImage], updateQuestion);

// DELETE
router.delete('/:id', [validateObjectId ,requireAuth, authorize(["admin", "data-entry"])], deleteQuestion);

module.exports = router;