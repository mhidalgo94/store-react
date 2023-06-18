const { isAuth } = require('../middleware/authenticate.js')

const checkoutController =require('../controllers/Checkout/checkoutController.js');
const router = require('express').Router();


// Config Publish Code
// router.get('/config', checkoutController.configPayment)
// Create payment intent
router.post('/create-payment-intent',checkoutController.createPaymentIntent)

router.post('/addCheckout',isAuth, checkoutController.addCheckout)


module.exports = router