const { Sequelize,sequelize, DataTypes} = require('../../db/index.js');

const Addresses = require('../Addresses/adressesModels.js');
const StatusOrder = require('./statusOrderModels.js');
const User = require('../User/userModels.js');

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
    },
    UUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique:true
    }
  });


  
module.exports = SalesOrder;