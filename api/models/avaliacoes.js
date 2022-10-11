'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Avaliacoes.belongsToMany(models.Diarios,{
        through:'Pivot_Avaliacoes_Diarios',
        foreignKey:'avaliacoes_id'
      })
      Avaliacoes.belongsTo(models.Status_Avaliacoes,{
        foreignKey:{
          name:'status_avaliacoes_id',
          allowNull:'false'
        }
      })
      Avaliacoes.belongsTo(models.Series,{
        foreignKey:{
          name:'serie_id',
          allowNull:'false'
        }
      })
      Avaliacoes.belongsTo(models.Plano_Ensino,{
        foreignKey:{
          name:'plano_ensino_id',
          allowNull:'false'
        }
      })
    }
  }
  Avaliacoes.init({
    descricao: DataTypes.STRING,
    nota: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Avaliacoes',
  });
  return Avaliacoes;
};