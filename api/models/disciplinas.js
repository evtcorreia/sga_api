'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Disciplinas.belongsToMany(models.Series,{
        through:'Pivot_Disciplinas_Series',
        foreignKey:'disciplinas_id'
      })

      Disciplinas.belongsToMany(models.Professores,{
        through:'Pivot_Disciplinas_Professores',
        foreignKey:'disciplinas_id'
      })

      Disciplinas.belongsTo(models.Status_Disciplinas,{
        foreignKey:{
          name:'status_disciplina_id',
          allowNull:'false'
        }
      })
      Disciplinas.hasMany(models.Diarios, {
        foreignKey:{
          name:'disciplina_id',
          allowNull:'false'
        }
      })
    }
  }
  Disciplinas.init({
    disciplina: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disciplinas',
  });
  return Disciplinas;
};