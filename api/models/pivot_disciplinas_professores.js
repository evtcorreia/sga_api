'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pivot_Disciplinas_Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Pivot_Disciplinas_Professores.hasMany(models.Plano_Ensino,{
        foreignKey:{
          name:'professores_disciplinas_id',
          allowNull:'false'
        }
        
      })
    }
  }
  Pivot_Disciplinas_Professores.init({
    professores_id: DataTypes.INTEGER,
    disciplinas_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pivot_Disciplinas_Professores',
  });
  return Pivot_Disciplinas_Professores;
};