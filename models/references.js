module.exports = function(sequelize, DataTypes){
  var Reference = sequelize.define("Reference", {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    reference: DataTypes.TEXT
  });
  return Reference;
};