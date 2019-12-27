const express = require('express');
const fancyItemController = require('../controllers/fancyItemController');

const router = express.Router();

router
    .route('/')
    .post(fancyItemController.createFancyItem)
    .get(fancyItemController.getAllFancyItems);

router.route('/:genre').get(fancyItemController.getFancyItemByGenre);

router.route('/details/:id').get(fancyItemController.getFancyItemDetails);

router.route('/books/:id').post(fancyItemController.addBooks);

router.route('/videos/:id').post(fancyItemController.addVideos);

router.route('/courses/:id').post(fancyItemController.addCourses);

module.exports = router;