'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Report extends Model{}

  Report.init(
   {
    report: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {sequelize,tableName:'Reports'} 
  )

  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.User,{foreignKey:'UserId'})
    Report.belongsTo(models.Country,{foreignKey:'CountryId'})
  };
  return Report;
};