const express = require('express');
const router = express.Router();

// methods
const { addOtherCategoryToQuestionNoHaveCategory, editAdminPassword, deleteAllNotificationsAndReports, createProfileToUser } = require('../controllers/testController');

// middlewares
const testAuth = require('../middlewares/testAuthMiddleware');

// routes

// POST

router.post('/create-profile',testAuth, createProfileToUser)

// PUT

router.put('/questions/section/:id',testAuth, addOtherCategoryToQuestionNoHaveCategory)

router.put('/edit-admin-password', testAuth,editAdminPassword)

// DELETE

router.delete('/deleteall', testAuth, deleteAllNotificationsAndReports);

module.exports = router;