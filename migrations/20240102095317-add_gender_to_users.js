'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'gender', {
      type: Sequelize.STRING,
      allowNull: true, // или false в зависимости от ваших требований
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'gender');
  },
};
