'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Diarios.belongsToMany(models.Avaliacoes,{
        through:'Pivot_Avaliacoes_Diarios',
        foreignKey:'diarios_id'

      })

      Diarios.belongsTo(models.Series,{
        foreignKey:{
          name:'serie_id',
          allowNull:false
        }
      })

      Diarios.belongsTo(models.Disciplinas,{
        foreignKey:{
          name:'disciplina_id',
          allowNull:'false'
        }
      })

      Diarios.belongsTo(models.Status_Diarios,{
        foreignKey:{
          name:'status_diario_id',
          allowNull:'false'
        }
      })
      Diarios.belongsTo(models.Ano_Letivo,{
        foreignKey:{
          name:'ano_letivo_id',
          allowNull:'false'
        }
      })
    }
  }
  Diarios.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diarios',
  });
  return Diarios;
};