module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('awards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      typeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'type_id',
        references: {
          model: {
            tableName: 'types',
          },
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'name',
      },
      point: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'point',
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.TEXT,
        field: 'image_url',
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
  down: queryInterface => queryInterface.dropTable('awards'),
};
