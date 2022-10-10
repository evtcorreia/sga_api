'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pivot_Escolas_Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pivot_Escolas_Pessoas.init({
    escola_id: DataTypes.INTEGER,
    pessoa_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pivot_Escolas_Pessoas',
  });
  return Pivot_Escolas_Pessoas;
};