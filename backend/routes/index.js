const category = require('./categoryRouter.js');
const products = require('./productRouter.js');
const reviews = require('./reviewsRouter.js')
const users = require('./userRouter.js');
const auth = require('./authRouter.js');
const address = require('./addressesRouter.js');
const paymentMetods = require('./paymentMethodRouter.js')
const wishlist = require('./wishlistRouter.js')
const checkout = require('./checkoutRouter.js')
const orderSales = require('./orderSalesRouter.js')

module.exports ={
    category,
    products,
    reviews,
    users,
    auth,
    address,
    paymentMetods,
    wishlist,
    checkout,
    orderSales
}