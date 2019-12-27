const express = require('express');

const quotesController = require('../controllers/quotesController');

const router = express.Router();

router.route('/').get(quotesController.getQuotes);

module.exports = router;