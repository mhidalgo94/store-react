const { sequelize, DataTypes} = require('../../db/index.js');
const path = require('path');

const Product = sequelize.define("Product",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    specification: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    images: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
            const images = this.getDataValue('images');
            if(!images){
                return null;
            }
            const baseUrl = process.env.DOMAIN_SERVER + ":" + process.env.PORT + '/public/'
            let urlImages = images.split(',').map(item=> baseUrl + item);
            return urlImages;
          }
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