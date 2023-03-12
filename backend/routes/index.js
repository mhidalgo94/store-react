const products = require('./productRouter.js');
const users = require('./userRouter');
const auth = require('./authRouter.js');

module.exports ={
    products,
    users,
    auth
}