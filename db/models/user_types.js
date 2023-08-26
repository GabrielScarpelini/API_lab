const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class user_types extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    user_types.init({
      type_name: DataTypes.STRING,
      cod_type: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'user_type',
    });
    return user_types;
  };