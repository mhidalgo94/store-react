require('dotenv').config();
const {sequelize} = require('../db/index.js');


const statusOrder = require('../models/Order/statusOrderModels.js');
const OrderItem = require('../models/Order/OrderItemsModels.js');
const Order = require('../models/Order/orderModels.js');
const Product = require('../models/Product/productModels.js');



const orderItem  = async ()=>{

    const orderItem = await OrderItem.findAll().then(values=>{
        return values
    });
    return orderItem
}

