'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Status_Pessoas.hasMany(models.Pessoas,{
        foreignKey:{
          name:'status_pessoa_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Pessoas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Pessoas',
  });
  return Status_Pessoas;
};