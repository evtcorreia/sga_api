'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Status_Matriculas.hasOne(models.Matriculas,{
        foreignKey:{
          name:'status_matricula_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Matriculas',
  });
  return Status_Matriculas;
};