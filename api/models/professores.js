'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Professores.belongsToMany(models.Disciplinas,{
        through:'Pivot_Disciplinas_Professores',
        foreignKey:'professores_id'
      })

      Professores.belongsToMany(models.Turmas,{
        through:'Pivot_Professores_Turmas',
        foreignKey:'professores_id'
      })

      Professores.belongsTo(models.Status_Professores,{
        foreignKey:{
          name:'status_professor_id',
          allowNull:'false'
        }
      })

      Professores.belongsTo(models.Pessoas,{
        foreignKey:{
          name:'pessoa_id',
          allowNull:'false'
        }
      })
    }
  }
  Professores.init({
    masp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};