// const ResourceSubCat = require("./resourceSubCat");
// const Description = require("./description");

module.exports = (sequelize, DataTypes) => {
    const ResourceContent = sequelize.define('ResourceContent', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
          type: DataTypes.STRING,
          allowNull:false,
      },
      link: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      image: {
          type: DataTypes.STRING,
          allowNull: true,
      }
    });
    ResourceContent.associate = function(models) {
      models.ResourceContent.belongsTo(models.ResourceSubCat);
      models.ResourceContent.hasMany(models.Description);
    }
    // ResourceContent.belongsTo(ResourceSubCat, {foreignKey: 'sub_cat_id'});
    // ResourceSubCat.hasMany(ResourceContent);
    //ResourceContent.hasMany(Description, {foreignKey: 'resource_content_id'});
    return ResourceContent;
  };
