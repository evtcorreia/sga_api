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

      Salas.belongsTo(models.Status_Sala,{
        foreignKey:{
          name:'status_sala_id',
          allowNull:'false'
        }
      })

      Salas.hasMany(models.Turmas,{
        foreignKey:{
          name:'sala_id',
          allowNull:'false'
        }
      })
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
    descricao: DataTypes.STRING,
    capacidade:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Salas',
  });
  return Salas;
};