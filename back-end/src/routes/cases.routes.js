const caseRouter = require('express').Router();
const caseController = require('../controllers/case');

caseRouter.route('/')
  .get(caseController.getAll)

caseRouter.route('/:cases/count')
  .get(caseController.getAllCasesDateCount);

caseRouter.route('/:cases/cumulative')
  .get(caseController.getAllCasesDateCumulative);

module.exports = caseRouter;