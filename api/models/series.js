'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Series.hasMany(models.Avaliacoes,{
        foreignKey:{
          name:'serie_id',
          allowNull:'false'
        }
        
      })

      Series.belongsToMany(models.Disciplinas,{
        through:'Pivot_Disciplinas_Series',
        foreignKey:'series_id'
      })

      Series.belongsTo(models.Status_Series,{
        foreignKey:{
          name:'status_series_id',
          allowNull:'false'
        }
      })
      Series.hasMany(models.Turmas,{
        foreignKey:{
          name:'serie_id',
          allowNull:false
        }
      })
      Series.hasMany(models.Diarios,{
        foreignKey:{
          name:'serie_id',
          allowNull:'false'
        }
      })
    }
  }
  Series.init({
    serie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Series',
  });
  return Series;
};