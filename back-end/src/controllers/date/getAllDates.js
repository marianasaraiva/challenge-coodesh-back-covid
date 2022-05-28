const dateService = require('../../services/date');

const getAllDates = async (req, res, next) => {
  try {
    const result = await dateService.getAllDates();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllDates;