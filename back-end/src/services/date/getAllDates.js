const { Case } = require('../../models');

const getAllDates = async () => {
  const result = await Case.findAll({
    attributes: {
      exclude: ['id', 'num_sequences', 'num_sequences_total', 'perc_sequences', 'location', 'variant'],
    },
    group: ['date'],
    limit: 150,
  });

  return result;
};

module.exports = getAllDates;