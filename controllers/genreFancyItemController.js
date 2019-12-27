const FancyItem = require('../models/fancyItemModel');

const factory = require('./handlerFactory');

exports.getGenreFancyItem = factory.getAll(FancyItem,'notableWork firstName lastName');