const { Sequelize,sequelize, DataTypes} = require('../../db/index.js')

const Product = require('../Product/productModels.js');

const Category = sequelize.define('categoria', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = Category;
