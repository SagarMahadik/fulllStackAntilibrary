const Genre = require('../models/genreModel');
const catchasync = require('./../utils/catchAsync');
const factory= require('./handlerFactory');
const AppError = require('./../utils/appError');


exports.createGenre = factory.createOne(Genre);

exports.getAllGenres = factory.getAll(Genre);

exports.getGenre = factory.getOne(Genre);

exports.deleteGenre = factory.deleteOne(Genre);

exports.updateGenre = factory.updateOne(Genre);