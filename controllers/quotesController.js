const FancyItem = require('../models/fancyItemModel');
const factory = require('./handlerFactory');

exports.getQuotes = factory.getAll(FancyItem,'quotes firstName lastName');