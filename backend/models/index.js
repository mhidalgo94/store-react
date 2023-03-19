const {Sequelize,sequelize,DataTypes} = require('../db/index.js');


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.products = require('./Product/productModels.js');
db.reviews = require('./Reviews/reviewsModels.js');
db.user = require('./User/userModels.js');
db.category = require('./Categoria/categoriaModels.js');
db.wishlist = require('./WishList/wishListModels.js');
db.addresses = require('./Addresses/adressesModels.js');
db.salesOrder = require('./Order/orderModels.js');
db.statusOrder = require('./Order/statusOrderModels.js');

db.sequelize.sync({alter:true}).then(()=>{
    console.log('DB re-sync done!')
}).catch(err=>{
    console.log("Sync" + err)
})


// 1  Relation Models
db.products.hasMany(db.reviews,{
    foreignKey:'product_id',
    as:'review'
})

db.products.User = db.products.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
})

db.reviews.belongsTo(db.products,{
    foreignKey:'product_id',
    as:'product'
})

// Relation Products model with Category
db.category.hasMany(db.products);
db.products.belongsTo(db.category,{
    foreignKey:'category_id',
    as: 'category'
});

// Products and User model with WishList
db.user.belongsToMany(db.products, { through: db.wishlist });
db.products.belongsToMany(db.user, { through: db.wishlist });

// User can have multiple addresses
db.user.hasMany(db.addresses);
db.addresses.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
});

// An address can have many sales orders
db.addresses.hasMany(db.salesOrder);
db.salesOrder.belongsTo(db.addresses,{
    foreignKey:'address_id',
    as:'address',
});

// Match Sales Order with Status Order
db.salesOrder.belongsTo(db.statusOrder,{
    foreignKey:'status_order_id',
    as:'status_order',
});

// Match Sales order with User
db.salesOrder.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
});

db.user.hasMany(db.salesOrder);




module.exports = db;