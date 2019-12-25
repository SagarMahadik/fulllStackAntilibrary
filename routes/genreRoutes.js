const express = require('express');
const genreController  =require('../controllers/genreController');


const router = express.Router();

router
    .route('/')
        .post(genreController.createGenre)
        .get(genreController.getAllGenres)

router
    .route('/:id')
        .get(genreController.getGenre)
        .delete(genreController.deleteGenre)
        .patch(genreController.updateGenre)    

module.exports = router;