'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Plano_Ensino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Status_Plano_Ensino.belongsTo(models.Plano_Ensino,{
        foreignKey:{
          name:'status_plano_ensino_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Plano_Ensino.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Plano_Ensino',
  });
  return Status_Plano_Ensino;
};