const caseRouter = require('express').Router();
const caseController = require('../controllers/case');

caseRouter.route('/')
  .get(caseController.getAll)

module.exports = caseRouter;