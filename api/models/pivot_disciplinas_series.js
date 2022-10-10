'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pivot_Disciplinas_Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pivot_Disciplinas_Series.init({
    serie_id: DataTypes.INTEGER,
    disciplina_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pivot_Disciplinas_Series',
  });
  return Pivot_Disciplinas_Series;
};