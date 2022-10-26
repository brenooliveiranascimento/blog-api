module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      displayName: {
        allowNull:false,
        type: Sequelize.STRING,
        field: 'display_name',
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING,
        allowNull:false,
        type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};