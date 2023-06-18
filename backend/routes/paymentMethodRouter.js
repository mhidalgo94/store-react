const payMethoControllers = require('../controllers/PaymentMethods/paymentMethodsControllers.js');
const { authenticated } =require('../middleware/authenticate.js');


const router = require('express').Router()
// Create
router.post('/addPaymentMethods', authenticated , payMethoControllers.addPaymentMethods);
// List Payment Methods
router.get('/allPaymentMethods',authenticated,payMethoControllers.getAllPaymentMethods);
// One Payment Methods
router.get('/:id',authenticated, payMethoControllers.getOnePaymentMethods);
// Update Payment Methods
router.put('/:id',authenticated, payMethoControllers.updatePaymentMethods);
// Remove one Payment Methods
router.delete('/:id',authenticated, payMethoControllers.removePaymentMethods);

module.exports = router;