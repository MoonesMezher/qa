const express = require('express');
const router = express.Router();

// methods
const { showSection, showAllActiveSections, showAllNotActiveSections, createSection, updateSection, disactivateSection, activateSection, deleteSection, showSectionsByName, showSections } = require('../controllers/sectionController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const { uploadImage, upload, uploadImageWhenUpdate } = require('../middlewares/checkFromImageMiddleware');

// routes

// GET
router.get('/', [requireAuth, authorize(["admin", "data-entry", "user", "guest"])], showSections);

router.get('/filter-by-name/:name', [requireAuth, authorize(["admin", "data-entry"])], showSectionsByName);

router.get('/active', [requireAuth, authorize(["admin", "data-entry", "user", "guest"])], showAllActiveSections);

router.get('/not-active', [requireAuth, authorize(["admin"])], showAllNotActiveSections);

router.get('/:id', [validateObjectId, requireAuth, authorize(["admin", "data-entry", "user", "guest"])], showSection);

// POST
router.post('/:folder', [requireAuth, authorize(["admin"]), upload.single("picture"), uploadImage], createSection);

// PUT
router.put('/:id', [validateObjectId ,requireAuth, authorize(["admin"]), upload.single("picture"), uploadImageWhenUpdate], updateSection);

router.put('/activate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], activateSection);

router.put('/disactivate/:id', [validateObjectId ,requireAuth, authorize(["admin"])], disactivateSection);

// DELETE
router.delete('/:id', [validateObjectId ,requireAuth, authorize(["admin"])], deleteSection);

module.exports = router;