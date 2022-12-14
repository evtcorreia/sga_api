'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Pessoas.hasOne(models.Alunos,{
        foreignKey:{
          name:'pessoa_id',
          allowNull:'false'
        }
      })

      Pessoas.hasOne(models.Professores, {
        foreignKey:{
          name:'pessoa_id',
          allowNull:'false'
        }
      })

      Pessoas.belongsToMany(models.Escolas,{
        through:'Pivot_Escolas_Pessoas',
        foreignKey:'pessoa_id'
      })

      Pessoas.hasOne(models.Usuarios,{
        foreignKey:{
          name:'pessoa_id',
          allowNull:'false'
        }
      })

      Pessoas.belongsTo(models.Status_Pessoas,{
        foreignKey:{
          name:'status_pessoa_id',
          allowNull:'false'
        }
      })
      Pessoas.belongsTo(models.Enderecos,{
        foreignKey:{
          name:'endereco_id',
          allowNull:'false'
        }
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dt_nascimento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};