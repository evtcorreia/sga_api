'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Enderecos.hasOne(models.Pessoas,{
        foreignKey:{
          name:'endereco_id',
          allowNull:'false'

        }
      })

      Enderecos.hasOne(models.Escolas, {
        foreignKey:{
          name:'endereco_id',
          allowNull:'false'
        }
      })

      Enderecos.belongsTo(models.Municipios, {
        foreignKey:{
          name:'municipio_id',
          allowNull:'false'
        }
      })
    }
  }
  Enderecos.init({
    logradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    numero: DataTypes.STRING,
    complmento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enderecos',
  });
  return Enderecos;
};