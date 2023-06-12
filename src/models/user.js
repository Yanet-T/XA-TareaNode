/*const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'User',
    createdAt: false,
    updatedAt: false
  }
);

module.exports = User;*//*

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users', // Asegúrate de especificar el nombre de la tabla en tu base de datos
    createdAt: false,
    updatedAt: false
  }
);

module.exports = User;*/