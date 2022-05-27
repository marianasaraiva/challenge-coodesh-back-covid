const router = require('express').Router();

const caseRouter = require('./cases.routes');
const testRouter = require('./testRouter.router');

router.use('/cases', caseRouter);
router.use('/', testRouter);

module.exports = router;