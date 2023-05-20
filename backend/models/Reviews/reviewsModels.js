const { Sequelize,sequelize, DataTypes} = require('../../db/index.js')

const Product = require('../Product/productModels.js');

const Review = sequelize.define('reviews',{
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rate: {
        type:DataTypes.DECIMAL,
        allowNull: false,
        default:4,

    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique:true
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
})
 
module.exports = Review;

