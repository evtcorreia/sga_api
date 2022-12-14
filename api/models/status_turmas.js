'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Status_Turmas.hasOne(models.Turmas,{
        foreignKey:{
          name:'status_turma_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Turmas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Turmas',
  });
  return Status_Turmas;
};