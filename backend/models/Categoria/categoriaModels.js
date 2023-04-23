const { Sequelize,sequelize, DataTypes} = require('../../db/index.js')

const Category = sequelize.define('Category', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    }
});

module.exports = Category;
