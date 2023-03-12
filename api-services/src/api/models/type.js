/* eslint-disable no-param-reassign */
module.exports = (sequelize, DataTypes) => {
  const types = sequelize.define('types', {
    name: {
      type: DataTypes.STRING(55),
      validate: {
        notEmpty: { msg: 'Name is required' },
      },
      field: 'name',
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

  types.associate = models => {
    types.hasMany(models.awards, {
      foreignKey: {
        name: 'typeId',
      },
      as: 'awards',
    });
  };

  /** Models Hooks */

  /** Static methods */

  /** Object methods */
  const objectMethods = {};

  types.prototype = Object.assign(types.prototype, objectMethods);
  return types;
};
