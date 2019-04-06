'use strict';
module.exports = (sequelize, DataTypes) => {
  const arti_cle = sequelize.define('arti_cle', {
    title: DataTypes.STRING,
    userId: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  arti_cle.associate = function(models) {
    // associations can be defined here
  };
  return arti_cle;
};