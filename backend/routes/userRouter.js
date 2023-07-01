const userController = require('../controllers/Users/userController.js');
const { authenticated } =require('../middleware/authenticate.js');
const { authorize } = require('../middleware/authorize.js');
const {uploadPublic} = require('../middleware/multerConfig.js')

const router = require('express').Router()

// Create
router.post('/addUser', userController.addUser);
// Validate Code for active user
router.post('/verifyCode', userController.verifyCodeUser);
// Validate Code for active user
router.post('/resendCode', userController.resetCodeVerifyUser)
// Verify email for reset password
router.post('/verify-email', userController.verifyEmailUser)
// Verify email for reset password
router.post('/change-password', userController.changePassword)

// List Users
router.get('/allUsers',authenticated, userController.getAllUsers);
// One User
router.get('/:id',authenticated, userController.getOneUser);


// self-Update User required params email.
router.put('/update',authenticated,authorize(['client','admin','moderator']),uploadPublic.single('image'),userController.selfUpdateUser);
// Update User Authorize
router.put('/:id',authenticated, authorize(['moderator','admin']),userController.updateUser);
// Remove one User Authorize
router.delete('/:id',authenticated, authorize(['moderator','admin']), userController.removeUser);

module.exports = router;