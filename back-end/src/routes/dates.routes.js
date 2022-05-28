const dateRouter = require('express').Router();
const dateController = require('../controllers/date');

dateRouter.route('/')
  .get(dateController.getAllDates);

module.exports = dateRouter;