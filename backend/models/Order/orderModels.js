const { Sequelize,sequelize, DataTypes} = require('../../db/index.js');

const SalesOrder = sequelize.define('orderSales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });
  
module.exports = SalesOrder;