'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Escolas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Escolas.hasMany(Models.Salas,{
        foreignKey:{
          name:'escola_id',
          allowNull:false
        }
      })
      Escolas.belongsTo(Models.Enderecos,{
        foreignKey:{
          name:'endereco_id',
          allowNull:'false'
        }
      })
    }
  }
  Escolas.init({
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Escolas',
  });
  return Escolas;
};