const { fn, col, Op} = require('sequelize');
const { Case } = require('../../models');

const getAllCasesDateCumulative = async (params) => {
  const INITIAL_DATE = '2020-02-01';
  const result = await Case.findAll({
    attributes: [
      'location',
      [fn('GROUP_CONCAT', col('variant')), 'variant'],
      [fn('SUM', col('num_sequences_total')), 'cumulative']
    ],
    where: {
      date: {
        [Op.between]: [INITIAL_DATE, params],
       },
    },
    group: ['location'],
  });
  return result;
};

module.exports = getAllCasesDateCumulative;

