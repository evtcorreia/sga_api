'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Turmas.belongsToMany(models.Professores,{
        through:'Pivot_Professores_Turmas',
        foreignKey:'turmas_id'
      })

      Turmas.belongsTo(models.Salas,{
        foreignKey:{
          name:'sala_id',
          allowNull:'false'
        }
      })

      Turmas.belongsTo(models.Series,{
        foreignKey:{
          name:'serie_id',
          allowNull:'false'
        }
      })

      Turmas.belongsTo(models.Status_Turmas,{
        foreignKey:{
          name:'status_turma_id',
          allowNull:'false'
        }
      })

      Turmas.hasMany(models.Matriculas,{
        foreignKey:{
          name:'turma_id',
          allowNull:'false'
        }
      })
    }
  }
  Turmas.init({
    identificador: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};