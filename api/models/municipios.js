'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Municipios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Municipios.hasMany(models.Enderecos,{
        foreignKey:{
          name:'municipio_id',
          allowNull:'false'
        }
      })

      Municipios.belongsTo(models.Ufs,{
        foreignKey:{
          name:'uf_codigo',
          allowNull:'false'
        }
      })
    }
  }
  Municipios.init({
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Municipios',
  });
  return Municipios;
};