const caseService = require('../../services/case');

const getAllCasesDateCumulative = async (req, res, next) => {
  try {
    const { cases } = req.params;
    const result = await caseService.getAllCasesDateCumulative(cases);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllCasesDateCumulative;