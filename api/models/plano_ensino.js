'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plano_Ensino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Plano_Ensino.hasMany(model.Avaliacoes,{
        foreignKey:'plano_ensino_id',
        allowNull:'false'
      })

      Plano_Ensino.belongsTo(models.Status_Plano_Ensino,{
        foreignKey:{
          name:'status_plano_ensino_id',
          allowNull:'false'
        }
      })
      Plano_Ensino.belongsTo(models.Pivot_Disciplinas_Professores,{
        foreignKey:{
          name:'professores_disciplinas_id',
          allowNull:'false'
    }
  })
}}
  Plano_Ensino.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plano_Ensino',
  });
  return Plano_Ensino;
};