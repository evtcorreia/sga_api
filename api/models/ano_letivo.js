'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ano_Letivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ano_Letivo.init({
    ano: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ano_Letivo',
  });
  return Ano_Letivo;
};