module.exports = function(sequelize, DataTypes){
  var Project = sequelize.define("Project", {
    title: DataTypes.STRING,
    projectType: DataTypes.STRING,
    image: DataTypes.STRING,
    githubLink: DataTypes.STRING,
    liveSiteLink: DataTypes.STRING
  });
  return Project;
};