module.exports = (sequelize, DataTypes) => {
  const ResourceCat = sequelize.define('ResourceCat', {
    catID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, 
      field: 'cat_id'
    },
    resourceType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'resource_type'
    },
    catDescription: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'cat_description'
    },
  }, {
    timestamps: false
  });

  ResourceCat.associate = function(models) {
    models.ResourceCat.hasMany(models.ResourceSubCat, { foreignKey: 'cat_id' });
  };
  return ResourceCat;
};
