module.exports = function(sequelize, DataTypes){
  var Message = sequelize.define("Message", {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.TEXT
  });
  return Message;
}