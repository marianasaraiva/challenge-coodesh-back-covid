const router = require('express').Router();

const caseRouter = require('./cases.routes');
const dateRouter = require('./dates.routes');
const testRouter = require('./testRouter.router');

router.use('/cases', caseRouter);
router.use('/dates', dateRouter);
router.use('/', testRouter);

module.exports = router;