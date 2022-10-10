'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ufs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Ufs.hasMany(models.Municipios,{
        foreignKey:{
          name:"uf_codigo",
          allowNull:'false'
        }
      })

    }
  }
  Ufs.init({
    codigo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    uf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ufs',
  });
  return Ufs;
};

/*
foreignKey:{
          name:'uf',
          allowNull:'false'
*/