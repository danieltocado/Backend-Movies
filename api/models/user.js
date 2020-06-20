'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.prototype.toJSON = function() {
    const user = this.get();
    delete user.password;
    return user;
}

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};