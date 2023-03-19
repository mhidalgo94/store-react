const addressesControllers = require('../controllers/Addresses/addressesControllers.js');
const { authenticated } =require('../middleware/authenticate.js');


const router = require('express').Router()

// Create
router.post('/addAddress', addressesControllers.addAddress);
// List Category
router.get('/allAddresses',addressesControllers.getAllAddresses);
// One Category
router.get('/:id', addressesControllers.getOneAddres);
// Update Category
router.put('/:id',authenticated, addressesControllers.updateAddress);
// Remove one Category
router.delete('/:id',authenticated, addressesControllers.removeAddress);

module.exports = router;