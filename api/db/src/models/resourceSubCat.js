module.exports = (sequelize, DataTypes) => {
    const ResourceSubCat = sequelize.define('ResourceSubCat', {
      subCatID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        field: 'sub_cat_id' 
      },
      subCatTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'sub_cat_title'
      },
      catID: {
        type: DataTypes.INTEGER, 
        references: {
          model: 'ResourceCat',
          key: 'catID'
        },
        field: 'cat_id'
      }
    });
    ResourceSubCat.associate = function(models) {
      models.ResourceSubCat.belongsTo(models.ResourceCat, { foreignKey: 'cat_id' });
      models.ResourceSubCat.hasMany(models.ResourceContent, { foreignKey: 'sub_cat_id' });
    };
    // ResourceSubCat.belongsTo(ResourceCat, {foreignKey: 'cat_id'});
    // ResourceCat.hasMany(ResourceSubCat);
    // ResourceSubCat.hasMany(ResourceContent, {foreignKey: 'sub_cat_id'});
    return ResourceSubCat;
  };