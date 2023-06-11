const { isAuth } = require('../middleware/authenticate.js')

const checkoutController =require('../controllers/Checkout/checkoutController.js');
const router = require('express').Router();


router.post('/addCheckout',isAuth, checkoutController.addCheckout)


module.exports = router