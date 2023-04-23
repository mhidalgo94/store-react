const productController = require('../controllers/Product/productsController.js');
const { authenticated } =require('../middleware/authenticate.js')
const {uploadProducts} = require('../middleware/multerConfig.js')


const router = require('express').Router()

// Create
router.post('/addProduct', authenticated,uploadProducts.array('images') ,productController.addProduct);
// List products
router.get('/allProducts',productController.getAllProducts);
// List product available
router.get('/published', productController.getAvailableProducts);
// One Product
router.get('/:id', productController.getOneProduct);
// Update Product
router.put('/:id',authenticated, productController.updateProduct);
// Remove one product
router.delete('/:id',authenticated, productController.removeProduct);

module.exports = router;