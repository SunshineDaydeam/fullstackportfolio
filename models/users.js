module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.TEXT,
    salt: DataTypes.TEXT
  });
  return User;
}