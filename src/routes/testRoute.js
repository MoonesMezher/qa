const express = require('express');
const router = express.Router();

// methods
const { addOtherCategoryToQuestionNoHaveCategory, editAdminPassword, deleteAllNotificationsAndReports } = require('../controllers/testController');

// middlewares
const testAuth = require('../middlewares/testAuthMiddleware');

// routes

// PUT

router.put('/api/test/questions/section/:id',testAuth, addOtherCategoryToQuestionNoHaveCategory)

router.put('/edit-admin-password', testAuth,editAdminPassword)

// DELETE

router.delete('/api/test/deleteall', testAuth, deleteAllNotificationsAndReports);

module.exports = router;