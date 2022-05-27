'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cases', {
      location: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      variant: {
        type: Sequelize.STRING
      },
      num_sequences: {
        type: Sequelize.INTEGER
      },
      perc_sequences: {
        type: Sequelize.DOUBLE
      },
      num_sequences_total: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Cases');
  }
};