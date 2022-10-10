'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alunos.init({
    dt_matricula: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Alunos',
  });
  return Alunos;
};