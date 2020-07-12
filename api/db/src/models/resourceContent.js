module.exports = (sequelize, DataTypes) => {
    const ResourceContent = sequelize.define('ResourceContent', {
      contentID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        field: 'content_id'
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'title'
      },
      contentDescription: {
          type: DataTypes.STRING,
          allowNull:false,
          field: 'content_description'
      },
      link: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'link'
      },
      image: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'image'
      },
      subCatID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'ResourceSubCat',
          key: 'subCatID'
        },
        field: 'sub_cat_id'
      }
    });
    ResourceContent.associate = function(models) {
      models.ResourceContent.belongsTo(models.ResourceSubCat, { foreignKey: 'sub_cat_id' });
      models.ResourceContent.hasMany(models.ExtraContentDescription, { foreignKey: 'content_id' });
    }
    return ResourceContent;
  };
