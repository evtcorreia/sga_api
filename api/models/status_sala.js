'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Sala extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Status_Sala.hasMany(models.Salas,{
        foreignKey:{
          name:'status_sala_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Sala.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Sala',
  });
  return Status_Sala;
};