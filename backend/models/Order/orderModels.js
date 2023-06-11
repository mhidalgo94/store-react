const {Sequelize, sequelize, DataTypes} = require('../../db/index.js');

const SalesOrder = sequelize.define('orderSales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    address:{
      type:DataTypes.STRING,
      allowNull:false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    idPayment:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    brand:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    country:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    idCard:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    last4:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    UUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique:true
    },
    status: {
      type: DataTypes.ENUM('Processing','In transit','Delivered','Cancelled','Refunded','Returned'),
      allowNull: false,
      defaultValue: 'Processing'
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


  
module.exports = SalesOrder;