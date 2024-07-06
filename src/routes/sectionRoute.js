const express = require('express');
const router = express.Router();

// methods
const { showSection, showAllActiveSections, showAllNotActiveSections, createSection, updateSection, disactivateSection, activateSection, deleteSection, showSectionsByName, showSections, getAllSectionsAndCategoris } = require('../controllers/sectionController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const { isImage } = require('../middlewares/checkFromImageMiddleware');

// routes

// GET
router.get('/', showSections);

router.get('/filter-by-name/:name', [requireAuth, authorize(["admin", "data-entry"])], showSectionsByName);

router.get('/active', [requireAuth, authorize(["admin", "data-entry", "user", "guest"])], showAllActiveSections);

router.get('/not-active', [requireAuth, authorize(["admin"])], showAllNotActiveSections);

router.get('/with-categories', [requireAuth, authorize(["admin", "user", "guest"])], getAllSectionsAndCategoris);

router.get('/:id', [validateObjectId, requireAuth, authorize(["admin", "data-entry", "user", "guest"])], showSection);

// POST
router.post('/', [requireAuth, authorize(["admin"]), isImage], createSection);

// PUT
router.put('/:id', [validateObjectId ,requireAuth, authorize(["admin"]), isImage], updateSection);

router.put('/activate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], activateSection);

router.put('/disactivate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], disactivateSection);

// DELETE
router.delete('/:id', [validateObjectId ,requireAuth, authorize(["admin"])], deleteSection);

module.exports = router;