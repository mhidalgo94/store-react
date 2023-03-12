const categoryControllers = require('../controllers/Category/categoryControllers.js');
const { authenticated } =require('../middleware/authenticate.js')
const { authorize } =require('../middleware/authorize.js')


const router = require('express').Router()

// Create
router.post('/addCategory', authenticated, authorize(['admin','moderator']) ,categoryControllers.addCategory);
// List Category
router.get('/allCategories',categoryControllers.getAllCategories);
// One Category
router.get('/:id', categoryControllers.getOneCategory);
// Update Category
router.put('/:id',authenticated, authorize(['admin','moderator']), categoryControllers.updateCategory);
// Remove one Category
router.delete('/:id',authenticated, authorize(['admin','moderator']), categoryControllers.removeCategory);

module.exports = router;