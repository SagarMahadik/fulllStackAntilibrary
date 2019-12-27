const express = require('express');
const genreFancyItemController  =require('../controllers/genreFancyItemController');


const router = express.Router();

router
    .route('/:genre')
        .get(genreFancyItemController.getGenreFancyItem);

module.exports = router;