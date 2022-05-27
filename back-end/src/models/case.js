const { DataTypes } = require('sequelize');

const Attributes = {
  location: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.STRING
  },
  variant: {
    type: DataTypes.STRING
  },
  num_sequences: {
    type: DataTypes.INTEGER
  },
  perc_sequences: {
    type: DataTypes.DOUBLE
  },
  num_sequences_total: {
    type: DataTypes.INTEGER
  },
};

module.exports = (sequelize) => {
  const Case = sequelize.define('Case',
    Attributes,
    {
      timestamps: false,
      tableName: 'Cases',
    });

  return Case;
};