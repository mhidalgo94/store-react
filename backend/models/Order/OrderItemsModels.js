const { sequelize, DataTypes} = require('../../db/index.js');

const OrderItem = sequelize.define('OrderItem', {
    quantity: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    price: {
        type:DataTypes.FLOAT,
        allowNull: false,
    }
});
  
module.exports = OrderItem;

  