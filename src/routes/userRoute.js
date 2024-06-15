const express = require('express');
const router = express.Router();

// methods
const { signupUser, loginUser, logoutUser, infoUsers, infoUser, updateUser, infoUserByRole, signupUserAsGuest, signupUserAsDataEntry, updateDataEntry, activateUser, disActivateUser, deleteUser, veryfiedUser, infoUsersByUsername, paidAccount, addTokensToUser, updatePassword } = require('../controllers/userController');

// middlewares
const requireAuth = require('../middlewares/requireAuth');
const authorize = require('../middlewares/roleMiddleware');
const validateObjectId = require('../middlewares/checkFromIdMiddleware');
const validatePageParameter = require('../middlewares/checkFromPageKeyMiddleware');

// routes

// GET
router.get('/page/:page', [validatePageParameter], infoUsers);

router.get('/filter-by-role/:role/page/:page', [validatePageParameter, requireAuth, authorize(['admin'])], infoUserByRole);

router.get('/filter-by-username/:username/page/:page', [validatePageParameter, requireAuth, authorize(['admin', 'user'])], infoUsersByUsername);

router.get('/:id', validateObjectId, infoUser);

// POST
router.post('/signup/as-guest', signupUserAsGuest);

router.post('/signup/as-data-entry', signupUserAsDataEntry);

router.post('/signup', signupUser);

router.post('/login', loginUser);

router.post('/logout', [requireAuth, authorize(['user', 'guest'])], logoutUser);

// PUT
router.put('/update', [requireAuth, authorize(['user'])] ,updateUser);

router.put('/update/date-entry/:id', [validateObjectId, requireAuth, authorize(['admin'])], updateDataEntry);

router.put('/active/:id', [validateObjectId, requireAuth, authorize(['admin'])], activateUser);

router.put('/disactive/:id', [validateObjectId, requireAuth, authorize(['admin'])], disActivateUser);

router.put('/verified/:email', veryfiedUser);

router.put('/change-to-paid/', [requireAuth, authorize(['user'])], paidAccount);

router.put('/add-tokens/:id', [validateObjectId, requireAuth, authorize(['admin'])], addTokensToUser);

router.put('/update-password/:id', [validateObjectId, requireAuth, authorize(['admin'])], updatePassword);

// DELETE
router.delete('/:id', [validateObjectId, requireAuth, authorize(['admin'])], deleteUser);

module.exports = router;