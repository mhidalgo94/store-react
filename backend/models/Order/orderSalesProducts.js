const {Sequelize, sequelize, DataTypes} = require('../../db/index.js');


const OrderSaleProduct = sequelize.define('OrderSaleProduct', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      get() {
          const rawValue = this.getDataValue('createdAt');
          const formattedDate = rawValue.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
          });
          const formattedTime = rawValue.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          });
          return `${formattedDate} ${formattedTime}`;
      }
    }
});

module.exports = OrderSaleProduct;