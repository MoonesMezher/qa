const express = require('express');
const router = express.Router();

// methods
const { addOtherCategoryToQuestionNoHaveCategory, editAdminPassword, deleteAllNotificationsAndReports, createProfileToUser, moveCategoryToAnotherSection, deleteAllNotActiveDataEntry } = require('../controllers/testController');

// middlewares
const testAuth = require('../middlewares/testAuthMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');

// routes

// POST

router.post('/create-profile',testAuth, createProfileToUser)

// PUT

router.put('/move-category/:id', [testAuth, validateObjectId], moveCategoryToAnotherSection)

// router.put('/questions/section/:id',testAuth, addOtherCategoryToQuestionNoHaveCategory)

router.put('/edit-admin-password', testAuth,editAdminPassword)

// DELETE

router.delete('/deleteall', testAuth, deleteAllNotificationsAndReports);

router.delete('/delete-all-not-active-data-entry', testAuth, deleteAllNotActiveDataEntry);

module.exports = router;