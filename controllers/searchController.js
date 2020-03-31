const FancyItem = require('../models/fancyItemModel');

const factory = require('./handlerFactory');

exports.getSearchResults = factory.getSearchOutcomes(
  FancyItem,
  'notableWork firstName lastName profilePicture'
);
