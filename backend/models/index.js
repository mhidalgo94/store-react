const {Sequelize,sequelize} = require('../db/index.js');


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
db.orderItems = require('./Order/OrderItemsModels.js')
db.paymentMethods = require('./PaymentMethod/paymentMethodModels.js')


db.sequelize.sync({alter:false}).then(()=>{
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


// user with reviews
db.user.hasMany(db.reviews);
db.reviews.belongsTo(db.user);


// User with products
// db.products.User = db.products.belongsTo(db.user,{
db.products.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
    onDelete: 'CASCADE'
})

// Products and User model with WishList
db.user.belongsToMany(db.products, { through: db.wishlist });
db.products.belongsToMany(db.user, { through: db.wishlist });


// User can have multiple addresses
db.user.hasMany(db.addresses);
db.addresses.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
});

// db.addresses.hasMany(db.salesOrder);
db.salesOrder.belongsTo(db.addresses);

// Match Sales Order with Status Order
db.salesOrder.belongsTo(db.statusOrder);

// Match Sales order with User
db.salesOrder.belongsTo(db.user);

db.orderItems.belongsTo(db.products);

// Define la relación entre SalesOrder y OrderItem
db.salesOrder.belongsToMany(db.orderItems, { through: 'OrderItemSales' });


// Establecer relación belongsTo
db.paymentMethods.belongsTo(db.user)

db.user.hasMany(db.salesOrder);

// Relation Products model with Category
db.products.belongsToMany(db.category,{ through: 'ProductCategory', as:'categories' });

// db.category.belongsToMany(db.products, { through: 'ProductCategory' })




module.exports = db;