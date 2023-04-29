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
db.paymentMethods = require('./PaymentMethod/paymentMethodModels.js')


db.sequelize.sync({alter:true}).then(()=>{
    console.log('DB re-sync done!')
}).catch(err=>{
    console.log("Sync" + err)
})


// 1  Relation Models
// Product with reviews
db.products.hasMany(db.reviews,{
    foreignKey:'product_id',
    as:'review',
    onDelete: 'CASCADE'
})

db.reviews.belongsTo(db.products,{
    foreignKey:'product_id',
    as:'product',
    onDelete: 'CASCADE'
})

// User with products
db.products.User = db.products.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
    onDelete: 'CASCADE'
})

// Relation Products model with Category
db.products.belongsToMany(db.category,{ through: 'ProductCategory', as:'categories' });

db.category.belongsToMany(db.products, { through: 'ProductCategory' })


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
// db.addresses.hasMany(db.salesOrder);
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


// Establecer relación belongsTo
db.paymentMethods.belongsTo(db.user)

db.user.hasMany(db.salesOrder);




module.exports = db;