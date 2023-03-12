const dbConfig = require('../config/dbConfig.js');
const {Sequelize,DataTypes} = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
    }
)

sequelize.authenticate().then(()=>{
    console.log('Authentication DB successfully')
}).catch(err=>{
    console.log("Auth Error:" + err);
})

module.exports = {
    Sequelize,
    sequelize,
    DataTypes
}