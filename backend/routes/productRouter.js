const productController = require('../controllers/Product/productsController.js');
const { authenticated,isAuth } =require('../middleware/authenticate.js')
const { authorize } =require('../middleware/authorize.js')
const {uploadProducts} = require('../middleware/multerConfig.js')

const router = require('express').Router()

// Create
router.post('/addProduct', authenticated, authorize(['admin','moderator']),uploadProducts.array('images') ,productController.addProduct);
// List products
router.get('/allProducts',authenticated,authorize(['admin','moderator']),productController.getAllProducts);
// List products public user
router.get('/', productController.getAvailableProducts);
// One Product
router.get('/:id',isAuth, productController.getOneProduct);
// Update Product
router.put('/:id',authenticated,authorize(['admin','moderator']), uploadProducts.array('images'), productController.updateProduct);
// Remove one product
router.delete('/:id',authenticated,authorize(['admin','moderator']), productController.removeProduct);

module.exports = router;