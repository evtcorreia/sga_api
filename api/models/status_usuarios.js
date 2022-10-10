'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Status_Usuarios.hasOne(models.Usuarios,{
        foreignKey:{
          name:'status_usuario_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Usuarios.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Usuarios',
  });
  return Status_Usuarios;
};