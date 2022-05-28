const { fn, col } = require('sequelize');
const { Case } = require('../../models');

const getAllCasesDateCount = async (params) => {
  const result = await Case.findAll({
    attributes: {
      exclude: ['id', 'num_sequences', 'num_sequences_total', 'perc_sequences'],
      // include: [[fn('COUNT', col('variant')), 'variant']],
    },
    where: {
      date: params,
    },
    group: ['location', 'variant'],
    limit: 150,
  });

  return result;
};

module.exports = getAllCasesDateCount;
