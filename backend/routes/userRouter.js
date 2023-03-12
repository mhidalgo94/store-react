const userController = require('../controllers/Users/userController.js');
const { authenticated } =require('../middleware/authenticate.js')

const router = require('express').Router()

// Create
router.post('/addUser',authenticated, userController.addUser);
// List Users
router.get('/allUsers',authenticated, userController.getAllUsers);
// One User
router.get('/:id',authenticated, userController.getOneUser);
// Update User
router.put('/:id',authenticated, userController.updateUser);
// Remove one User
router.delete('/:id',authenticated, userController.removeUser);

module.exports = router;