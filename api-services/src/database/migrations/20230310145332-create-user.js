module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'email',
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'full_name',
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'status',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    }),
  down: queryInterface => queryInterface.dropTable('users'),
};
