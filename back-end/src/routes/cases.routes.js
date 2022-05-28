const caseRouter = require('express').Router();
const caseController = require('../controllers/case');

caseRouter.route('/')
  .get(caseController.getAll)

caseRouter.route('/:cases/count')
  .get(caseController.getAllCasesDateCount);

module.exports = caseRouter;