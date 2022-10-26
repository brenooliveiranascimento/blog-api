'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories',{
      id: {
        allowNull: false,
        type: sequelize.STRING,
        field: 'id'
      },
      name: {
        allowNull: false,
        type: sequelize.STRING,
        field: 'name'
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
