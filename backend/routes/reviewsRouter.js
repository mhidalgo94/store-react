const reviewController = require('../controllers/Reviews/reviewsController.js');
const { authenticated } = require('../middleware/authenticate.js')


const router = require('express').Router()

// Create
router.post('/addReview', authenticated ,reviewController.addReview);
// List products for control manager
router.get('/allReviews', authenticated, reviewController.getAllReviews);
// List product available for client
router.get('/published/:id', reviewController.getReviews);
// One Review
router.get('/:id', authenticated, reviewController.getOneReview);
// Update Review
router.put('/:id',authenticated, reviewController.updateReview);
// Remove Review
router.delete('/:id',authenticated, reviewController.removeReview);

module.exports = router;