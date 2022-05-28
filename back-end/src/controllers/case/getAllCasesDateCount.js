const caseService = require('../../services/case');

const getAllCasesDateCount = async (req, res, next) => {
  try {
    const { cases } = req.params;
    const result = await caseService.getAllCasesDateCount(cases);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllCasesDateCount;