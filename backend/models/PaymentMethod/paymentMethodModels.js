const { sequelize, DataTypes} = require('../../db/index.js');

const PaymentMethods = sequelize.define('PaymentMethods', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numberCard: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
    // validate: {
    //   isCreditCard: true
    // }
  },
  nameCard: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expirationDate: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
          args: /^(0[1-9]|1[0-2])\/\d{2}$/,
          msg: 'The expiration date field must have the format MM/YYYY'
        }
    }
  },
  cvc: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 4] // Validar que el CVC tenga entre 3 y 4 caracteres
    }
  }
});

module.exports = PaymentMethods;
