module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'code',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(55),
        field: 'name',
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
  down: queryInterface => queryInterface.dropTable('types'),
};
