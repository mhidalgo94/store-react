
require('dotenv').config();

const {PORT} = require('./config/config.js');

const cors = require('cors');
const express = require('express');


var corOption = {
    host:'http://localhost:8081'
}


const app = express();
// middleware
app.use(cors(corOption));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static('static'))

// routes
const router = require('./routes/index.js');

// Api Auth
app.use('/api', router.auth);

// Api Category
app.use('/api/category', router.category);
// Api Products
app.use('/api/products', router.products);
// Api Reviews
app.use('/api/reviews', router.reviews);
// Api User
app.use('/api/user', router.users);
// Api Addresses
app.use('/api/addresses', router.address);

// Api Payment Methods
app.use('/api/paymentMethods', router.paymentMetods);
// Api for Wishlist 
app.use('/api/wishList', router.wishlist);
// Api Checkout
app.use('/api/checkout',router.checkout);
// Api Order Sales
app.use('/api/orderSales',router.orderSales);
// test server
app.get('/',(req,res)=>res.json({"message":"Server Running"}))


app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));
