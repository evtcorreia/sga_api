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

      Alunos.hasOne(models.Matricula,{
        foreignKey:{
          name:'aluno_id',
          allowNull:'false'
        }
      })

      Alunos.belongsTo(models.Status_Alunos,{
        foreignKey:{
          name:'status_aluno',
          allowNull:'false'
        }
      })

      Alunos.belongsTo(models.Pessoas,{
        foreignKey:{
          name:'pessoa_id',
          allowNull:falsse
        }
      })
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