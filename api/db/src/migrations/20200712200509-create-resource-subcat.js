'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ResourceSubCats', { 
      subCatID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        field: 'sub_cat_id' 
      },
      subCatTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'sub_cat_title'
      },
      catID: {
        type: Sequelize.INTEGER, 
        references: {
          model: 'ResourceCats',
          key: 'cat_id'
        },
        field: 'cat_id'
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ResourceSubCats');
  }
};
