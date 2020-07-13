'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ResourceContent', { 
      contentID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        field: 'content_id'
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'title'
      },
      contentDescription: {
          type: Sequelize.STRING,
          allowNull:false,
          field: 'content_description'
      },
      link: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'link'
      },
      image: {
          type: Sequelize.STRING,
          allowNull: true,
          field: 'image'
      },
      subCatID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ResourceSubCats',
          key: 'sub_cat_id'
        },
        field: 'sub_cat_id'
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ResourceContent');
  }
};
