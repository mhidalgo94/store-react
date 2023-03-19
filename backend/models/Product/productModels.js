const { Sequelize,sequelize, DataTypes} = require('../../db/index.js')

const Product = sequelize.define("product",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    specification: {
        type: DataTypes.JSON,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    old_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        default: 0,
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique:true
    },

})


module.exports = Product;