const { Sequelize,sequelize, DataTypes} = require('../../db/index.js')

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
        }
    })
    
module.exports = Review;

