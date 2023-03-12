/* eslint-disable no-param-reassign */
module.exports = (sequelize, DataTypes) => {
  const awards = sequelize.define('awards', {
    typeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'type_id',
      references: {
        model: {
          tableName: 'types',
        },
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING(255),
      validate: {
        notEmpty: { msg: 'name is required' },
      },
      field: 'name',
    },
    point: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: 'point is required' },
      },
      field: 'point',
    },
    imageUrl: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: { msg: 'imageUrl is required' },
      },
      field: 'image_url',
    },
    status: {
      allowNull: false,
      defaultValue: 1,
      type: DataTypes.INTEGER,
      field: 'status',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  });

  awards.associate = models => {
    awards.belongsTo(models.types, {
      foreignKey: {
        name: 'typeId',
      },
      as: 'type',
    });
  };

  /** Models Hooks */

  /** Static methods */

  /** Object methods */
  const objectMethods = {};

  awards.prototype = Object.assign(awards.prototype, objectMethods);
  return awards;
};
