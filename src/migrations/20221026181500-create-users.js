'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      display_name: {
        allowNull: false,
        type: sequelize.STRING,
        field: 'dirst_name'
      },
      email: {
        allowNull: false,
        type: sequelize.STRING,
        field: 'email'
      },
      password: {
        allowNull: false,
        type: sequelize.STRING,
        field: 'password'
      },
      image: {
        allowNull: false,
        type: sequelize.STRING,
        field: 'image'
      },
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
