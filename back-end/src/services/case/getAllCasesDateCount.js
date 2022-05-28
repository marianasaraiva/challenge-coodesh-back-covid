const { Case } = require('../../models');

const getAllCasesDateCount = async (params) => {
  const result = await Case.findAll({
    attributes : ['location', 'date', 'variant'],  
    where: { date: params },
    group: ['location', 'variant'],
  });
  const country = [...new Set(result.map((e) => e.location))];
  const covid = country.map((location) => ({
    location,
    date: params,
    variant: result.filter((country) => country.location === location).map(e => e.variant),
  }));

  return covid;
};

module.exports = getAllCasesDateCount;
