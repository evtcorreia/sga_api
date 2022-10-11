'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Diarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Status_Diarios.belongsTo(models.Diarios,{
        foreignKey:{
          name:'status_diario_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Diarios.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Diarios',
  });
  return Status_Diarios;
};