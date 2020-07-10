//'use strict';
// const ResourceSubCat = require("./resourceSubCat");
//let resourceSubCat = new ResourceSubCat();
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Resource extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Resource.init({
//     resource_type: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Resource',
//   });
//   return Resource;
// };
module.exports = (sequelize, DataTypes) => {
  const ResourceCat = sequelize.define('ResourceCat', {
    resource_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  ResourceCat.associate = function(models) {
    models.ResourceCat.hasMany(models.ResourceSubCat);
  };
  //console.log("sub cat", resourceSubCat);
  // ResourceCat.hasMany(ResourceSubCat);
  // ResourceSubCat.belongsTo(ResourceCat);
  return ResourceCat;
};
