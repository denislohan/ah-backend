'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    id:DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    userId:DataTypes.STRING

  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};