module.exports = (sequelize, DataTypes) => {
    const ExtraContentDescription = sequelize.define('ExtraContentDescription', {
      extraDescriptionID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        field: 'extra_description_id'
      },
      extraDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'extra_description'
      },
      contentID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'ResourceContent',
          key: 'contentID'
        },
        field: 'content_id'
      },
    }, {
      timestamps: false
    });
    ExtraContentDescription.associate = function(models) {
      models.ExtraContentDescription.belongsTo(models.ResourceContent, { foreignKey: 'content_id' });
    }
    return ExtraContentDescription;
  };
