'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    user_type_id: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    is_active: DataTypes.INTEGER,
    cpf_cnpj: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};