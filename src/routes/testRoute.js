const express = require('express');
const router = express.Router();

// methods
const { addOtherCategoryToQuestionNoHaveCategory, editAdminPassword, deleteAllNotificationsAndReports, createProfileToUser, moveCategoryToAnotherSection, deleteAllNotActiveDataEntry, deleteAllDataEntry, addCheckVariable } = require('../controllers/testController');

// middlewares
const testAuth = require('../middlewares/testAuthMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');

// routes

// POST

router.post('/create-profile',testAuth, createProfileToUser)

// PUT

router.put('/move-category/:id', [testAuth, validateObjectId], moveCategoryToAnotherSection)

// router.put('/questions/section/:id',testAuth, addOtherCategoryToQuestionNoHaveCategory)

router.put('/edit-admin-password', testAuth,editAdminPassword)

router.put('/add-check-variable-to-questions/page/:page', [testAuth, validatePageParameter], addCheckVariable)

// DELETE

router.delete('/deleteall', testAuth, deleteAllNotificationsAndReports);

router.delete('/delete-all-not-active-data-entry', testAuth, deleteAllNotActiveDataEntry);

router.delete('/delete-all-data-entry', testAuth, deleteAllDataEntry);

module.exports = router;