// const ResourceContent = require("./resourceContent");
// const ResourceCat = require("./resourceCat")

module.exports = (sequelize, DataTypes) => {
    const ResourceSubCat = sequelize.define('ResourceSubCat', {
      subCatTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    ResourceSubCat.associate = function(models) {
      models.ResourceSubCat.belongsTo(models.ResourceCat);
      models.ResourceSubCat.hasMany(models.ResourceContent);
    };
    // ResourceSubCat.belongsTo(ResourceCat, {foreignKey: 'cat_id'});
    // ResourceCat.hasMany(ResourceSubCat);
    // ResourceSubCat.hasMany(ResourceContent, {foreignKey: 'sub_cat_id'});
    return ResourceSubCat;
  };