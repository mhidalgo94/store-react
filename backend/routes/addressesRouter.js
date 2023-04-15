const addressesControllers = require('../controllers/Addresses/addressesControllers.js');
const { authenticated } = require('../middleware/authenticate.js');


const router = require('express').Router()

// Create
router.post('/addAddress',authenticated, addressesControllers.addAddress);
// List Category
router.get('/allAddresses',authenticated, addressesControllers.getAllAddresses);
// One Category
router.get('/:id',authenticated, addressesControllers.getOneAddres);
// Update Category
router.put('/:id',authenticated, addressesControllers.updateAddress);
// Remove one Category
router.delete('/:id',authenticated, addressesControllers.removeAddress);

module.exports = router;