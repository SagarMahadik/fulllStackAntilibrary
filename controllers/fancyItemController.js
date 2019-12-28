const FancyItem = require('../models/fancyItemModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createFancyItem = factory.createOne(FancyItem);

exports.getFancyItemByGenre = factory.showAll(FancyItem);

exports.getAllFancyItems = factory.showAll(FancyItem);

exports.getFancyItemDetails = factory.getOne(FancyItem);

exports.addBooks = factory.addNewData(FancyItem, 'books');

exports.addVideos = factory.addNewData(FancyItem, 'videos');

exports.addCourses = factory.addNewData(FancyItem, 'courses');
