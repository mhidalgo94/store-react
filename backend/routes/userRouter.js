const userController = require('../controllers/Users/userController.js');
const { authenticated } =require('../middleware/authenticate.js');
const { authorize } = require('../middleware/authorize.js');
const router = require('express').Router()

// Create
router.post('/addUser', userController.addUser);
// Validate Code for active user
router.post('/verifyCode', userController.verifyCodeUser);
// Validate Code for active user
router.post('/resendCode', userController.resetCodeVerifyUser)
// List Users
router.get('/allUsers',authenticated, userController.getAllUsers);
// One User
router.get('/:id',authenticated, userController.getOneUser);
// self-Update User
router.put('/update/:id',authenticated,authorize(['client']),userController.updateUser);
// Update User Authorize
router.put('/:id',authenticated, authorize(['moderator','admin']),userController.updateUser);
// Remove one User Authorize
router.delete('/:id',authenticated, authorize(['moderator','admin']), userController.removeUser);

module.exports = router;