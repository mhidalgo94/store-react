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
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING, // Tipo de datos para almacenar el número de teléfono
      allowNull: false, // No permitir valores nulos
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    idPayment:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    payment_method:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    client_secret:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    NameDelivery:{
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