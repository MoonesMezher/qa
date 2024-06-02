const express = require('express');
const router = express.Router();

// methods
const { showCategory, createCategory, updateCategory, deleteCategory, activateCategory, disactivateCategory, showAllActiveCategorys, showAllNotActiveCategorys, showCategoryBySection } = require('../controllers/categoryController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');

// routes

// GET
router.get('/filter-by-section/:section', [requireAuth, authorize(["admin", "data-entry"])], showCategoryBySection);

router.get('/active', [requireAuth, authorize(["admin", "data-entry", "user", "guest"])], showAllActiveCategorys);

router.get('/not-active', [requireAuth, authorize(["admin"])], showAllNotActiveCategorys);

router.get('/:id', [validateObjectId, requireAuth, authorize(["admin", "data-entry", "user", "guest"])], showCategory);

// POST
router.post('/', [requireAuth, authorize(["admin"])], createCategory);

// PUT
router.put('/:id', [validateObjectId ,requireAuth, authorize(["admin"])], updateCategory);

router.put('/activate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], activateCategory);

router.put('/disactivate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], disactivateCategory);

// DELETE
router.delete('/:id', [validateObjectId ,requireAuth, authorize(["admin"])], deleteCategory);

module.exports = router;