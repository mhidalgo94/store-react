const { authenticated } = require('../middleware/authenticate.js')

const controllerOrderSales = require('../controllers/OrderSales/orderController.js');
const router = require('express').Router()



// /api/orderSales/orders
router.get('/orders',authenticated, controllerOrderSales.listOrderSales);
router.get('/order/:id', controllerOrderSales.getOneOrderSales);

module.exports= router