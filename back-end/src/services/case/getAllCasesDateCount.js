const { fn, col } = require('sequelize');
const { Case } = require('../../models');

const getAllCasesDateCount = async (params) => {
  const result = await Case.findAll({
    attributes : ['location', 'date', [fn('GROUP_CONCAT', col('variant')), 'variant']],
    where: { date: params },
    group: ['location'],
  });
  return result;
};

module.exports = getAllCasesDateCount;
