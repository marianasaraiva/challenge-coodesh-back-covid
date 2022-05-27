const testRouter = require('express').Router();
const testController = require('../controllers/case');

testRouter.route('/')
  .get(testController.testRoute);

module.exports = testRouter;