const category = require('./categoryRouter.js');
const products = require('./productRouter.js');
const reviews = require('./reviewsRouter.js')
const users = require('./userRouter.js');
const auth = require('./authRouter.js');

module.exports ={
    category,
    products,
    reviews,
    users,
    auth
}