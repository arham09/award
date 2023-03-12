/* eslint-disable no-param-reassign */
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: {
      type: DataTypes.STRING(255),
      unique: { msg: 'email already exist' },
      defaultValue: '',
      validate: {
        notEmpty: { msg: 'email is required' },
      },
      field: 'email',
    },
    fullName: {
      type: DataTypes.STRING(255),
      defaultValue: '',
      validate: {
        notEmpty: { msg: 'Full Name is required' },
      },
      field: 'full_name',
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

  /** Models Hooks */

  /** Static methods */

  /** Object methods */
  const objectMethods = {};

  users.prototype = Object.assign(users.prototype, objectMethods);
  return users;
};
