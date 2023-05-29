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
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
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
          args:  /^\d{1,2}\/\d{4}$/,
          msg: 'The expiration date field must have the format MM/YYYY'
        }
    }
  },
  cvc: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [3, 4] // Validar que el CVC tenga entre 3 y 4 caracteres
    }
  }
});

module.exports = PaymentMethods;
