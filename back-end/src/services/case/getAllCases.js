const { Case } = require('../../models');

const getAllCases = async () => {
  const result = await Case.findAll({
    attributes: { exclude: ['id'] },
    limit: 10
  });

  return result;
};

module.exports = getAllCases;