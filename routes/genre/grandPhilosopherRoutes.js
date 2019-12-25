const express = require('express');
const grandPhilosopherController = require('../../controllers/genreController/grandPhilosopherController');


const router = express.Router();

router.route('/').post(grandPhilosopherController.createGrandPhilosopher);

module.exports = router;