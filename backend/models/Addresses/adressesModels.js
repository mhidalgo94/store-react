const { Sequelize,sequelize, DataTypes} = require('../../db/index.js');

const User = require('../User/userModels.js');
const SalesOrder = require('../Order/orderModels.js');


const Addresses = sequelize.define('address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip_code:{
      type: DataTypes.STRING,
      allowNull: false
    }
});


module.exports = Addresses