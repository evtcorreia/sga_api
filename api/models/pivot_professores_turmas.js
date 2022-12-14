'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pivot_Professores_Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

        Pivot_Professores_Turmas.belongsTo(models.Professores,{
          foreignKey:{
            name:'professores_id',
            allowNull:'false'
          }
        })
        Pivot_Professores_Turmas.belongsTo(models.Turmas,{
          foreignKey:{
            name:'turmas_id',
            allowNull:'false'
          }
        })

    
    }
  }
  Pivot_Professores_Turmas.init({
    turmas_id: DataTypes.INTEGER,
    professores_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pivot_Professores_Turmas',
  });
  return Pivot_Professores_Turmas;
};