'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Disciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Status_Disciplinas.hasMany(models.Disciplinas,{
        foreignKey:{
          name:'status_disciplina_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Disciplinas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Disciplinas',
  });
  return Status_Disciplinas;
};