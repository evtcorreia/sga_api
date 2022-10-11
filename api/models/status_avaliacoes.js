'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Avaliacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Status_Avaliacoes.belongsTo(models.Avaliacoes,{
        foreignKey:{
          name:'status_avaliacoes_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Avaliacoes.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Avaliacoes',
  });
  return Status_Avaliacoes;
};