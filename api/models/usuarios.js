'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Usuarios.belongsTo(models.Cargos,{
        foreignKey:{
          name:'cargo_id',
          allowNull:'false'
        }
      })

      Usuarios.hasMany(models.Log,{
        foreignKey:{
          name:'usuario_id',
          allowNull:'fale'
        }
      })

      Usuarios.belongsTo(models.Status_Usuarios,{
        foreignKey:{
          name:'status_usuario_id',
          allowNull:'false'
        }
      })

      Usuarios.belongsTo(models.Pessoas,{
        foreignKey:{
          name:'pessoa_id',
          allowNull:'false'
        }
      })
    }
  }
  Usuarios.init({
    login: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};