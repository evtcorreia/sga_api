'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Salas.belongsTo(models.Escolas, {
        foreignKey:{
          name:'escola_id',
          allowNull:false
        }
      })
    }
  }
  Salas.init({
    numero: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Salas',
  });
  return Salas;
};