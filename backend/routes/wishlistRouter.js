const wishlistController = require('../controllers/Wishlist/wishlistController.js');
const { authenticated } = require('../middleware/authenticate.js');

const router = require('express').Router()

// Create or delete
router.post('/addWishList',authenticated, wishlistController.addWishList);

router.get('/UserWishList',authenticated, wishlistController.getWishListUser);

module.exports = router;