const auth = require('../controllers/Users/userControllerAuth.js');

const router = require('express').Router()

// Login
router.post('/login', auth.Login);


module.exports = router;