'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    poster_path: DataTypes.STRING,
    popularity: DataTypes.FLOAT
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};