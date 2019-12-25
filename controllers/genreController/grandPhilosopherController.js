const GrandPhilosopher = require('../../models/genres/grandPhilosophersModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const factory = require('../../controllers/handlerFactory');

exports.createGrandPhilosopher = factory.createOne(GrandPhilosopher);