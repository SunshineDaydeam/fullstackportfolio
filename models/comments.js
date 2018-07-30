module.exports = function(sequelize, DataTypes){
  var Comment = sequelize.define("Comment", {
    name: DataTypes.STRING,
    occupation: DataTypes.STRING,
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    relationship: DataTypes.STRING,
    message: DataTypes.TEXT
  });
  return Comment;
};