'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Status_Professores.hasMany(models.Professores, {
        foreignKey:{
          name:'status_professor_id',
          allowNull:false
        }
      })
    }
  }
  Status_Professores.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Professores',
  });
  return Status_Professores;
};