// const ResourceContent = require("./resourceContent");

module.exports = (sequelize, DataTypes) => {
    const Description = sequelize.define('Description', {
      descrip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    Description.associate = function(models) {
      models.Description.belongsTo(models.ResourceContent);
    }
    //Description.belongsTo(ResourceContent, {foreignKey: 'resource_content_id'});
    return Description;
  };
