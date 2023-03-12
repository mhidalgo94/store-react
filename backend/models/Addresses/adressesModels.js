const { Sequelize,sequelize, DataTypes} = require('../../db/index.js');

const Direccion = sequelize.define('direccion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = Direccion