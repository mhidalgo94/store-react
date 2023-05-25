const { Sequelize,sequelize, DataTypes} = require('../../db/index.js')

const Wishlist = sequelize.define('wishlist', {});

module.exports = Wishlist;