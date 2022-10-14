'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ano_Letivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Ano_Letivo.hasMany(models.Diarios,{
        foreignKey:'ano_letivo_id',
        allowNull:'false'
      })

      Ano_Letivo.belongsTo(models.Status_Ano_Letivo,{
        foreignKey:{
          name:'status_ano_letivo_id',
          allowNull:'false'
        }
      })

      Ano_Letivo.hasMany(models.Matriculas,{
        foreignKey:{
          name:'ano_letivo_id',
          allowNull:'false'
        }
      })
    }
  }
  Ano_Letivo.init({
    ano: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ano_Letivo',
  });
  return Ano_Letivo;
};