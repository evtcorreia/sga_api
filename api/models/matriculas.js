'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Matriculas.belongsTo(models.Status_Matriculas,{

        foreignKey:{
          name:'status_matricula_id',
          allowNull:'false'
        }
      })

      Matriculas.belongsTo(models.Ano_Letivo,{
        foreignKey:{
          name:'ano_letivo_id',
          allowNull:'false'
        }
      })

      Matriculas.belongsTo(models.Turmas,{
        foreignKey:{
          name:'turma_id',
          allowNull:'false'
        }
      })

      Matriculas.belongsTo(models.Alunos,{
        foreignKey:{
          name:'aluno_id',
          allowNull:'false'
        }
      })
    }
  }
  Matriculas.init({
    ano: DataTypes.STRING,
    dt_matricula: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};