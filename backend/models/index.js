const {Sequelize,sequelize,DataTypes} = require('../db/index.js')


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.products = require('./Product/productModels.js');
db.reviews = require('./Reviews/reviewsModels.js');
db.user = require('./User/userModels.js');



db.sequelize.sync({force:false}).then(()=>{
    console.log('DB re-sync done!')
}).catch(err=>{
    console.log("Sync" + err)
})




// 1 Many Relation
db.products.hasMany(db.reviews,{
    foreignKey:'product_id',
    as:'review'
})

db.products.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
})

db.reviews.belongsTo(db.products,{
    foreignKey:'product_id',
    as:'product'
})




module.exports = db;