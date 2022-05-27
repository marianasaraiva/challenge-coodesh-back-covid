const caseService = require('../../services/case');

const getAllCases = async (_req, res, next) => {
  try {
    const result = await caseService.getAll();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllCases;