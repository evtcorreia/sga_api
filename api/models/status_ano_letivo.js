'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Ano_Letivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Status_Ano_Letivo.belongsTo(models.Ano_Letivo,{
        foreignKey:{
          name:'status_ano_letivo_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Ano_Letivo.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Ano_Letivo',
  });
  return Status_Ano_Letivo;
};