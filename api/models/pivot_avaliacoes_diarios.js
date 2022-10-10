'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pivot_Avaliacoes_Diarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pivot_Avaliacoes_Diarios.init({
    diario_id: DataTypes.INTEGER,
    avaliacoes_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pivot_Avaliacoes_Diarios',
  });
  return Pivot_Avaliacoes_Diarios;
};