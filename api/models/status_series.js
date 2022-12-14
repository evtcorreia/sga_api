'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Status_Series.hasMany(models.Series,{
        foreignKey:{
          name:'status_series_id',
          allowNull:'false'
        }
      })
    }
  }
  Status_Series.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status_Series',
  });
  return Status_Series;
};