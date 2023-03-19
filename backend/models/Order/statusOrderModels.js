const { Sequelize,sequelize, DataTypes} = require('../../db/index.js');


const StatusOrder = sequelize.define('states_order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM('Processing','In transit','Delivered','Cancelled','Refunded','Returned'),
        allowNull: false,
        defaultValue: 'Processing'
    },
    UUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique:true
    }
  });

  
module.exports = StatusOrder;