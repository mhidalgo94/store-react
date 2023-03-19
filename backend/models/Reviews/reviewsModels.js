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
    }
})
 
module.exports = Review;

