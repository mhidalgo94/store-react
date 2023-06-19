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
db.paymentMethods = require('./PaymentMethod/paymentMethodModels.js');
db.salesOrder =  require('./Order/orderModels.js');;
db.orderSalesProducts = require('./Order/orderSalesProducts.js');;


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
db.products.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
    onDelete: 'CASCADE'
})


// User can have multiple addresses
db.user.hasMany(db.addresses);

db.addresses.belongsTo(db.user,{
    foreignKey:'user_id',
    as:'user',
});



// Match Sales order with User
db.salesOrder.belongsTo(db.user, { optional: true});
// Establece la relación con el modelo Product

db.salesOrder.belongsToMany(db.products, { through: db.orderSalesProducts, as: 'ProductSales' });
db.products.belongsToMany(db.salesOrder, { through: db.orderSalesProducts,as: 'salesOrder' });

db.salesOrder.hasMany(db.orderSalesProducts);
// db.user.belongsTo(db.salesOrder);
db.orderSalesProducts.belongsTo(db.products);

// Establecer relación belongsTo
db.paymentMethods.belongsTo(db.user)

db.user.hasMany(db.salesOrder);

// Relation Products model with Category
db.products.belongsToMany(db.category, { through: 'ProductCategory', as:'categories' });


// Products and User model with WishList
db.products.belongsToMany(db.user, { through:  db.wishlist });
db.user.belongsToMany(db.products, { through:  db.wishlist });

db.wishlist.belongsTo(db.products); // Asociación de Wishlist a Product
db.wishlist.belongsTo(db.user);


module.exports = db;