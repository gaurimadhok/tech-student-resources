'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ResourceCats', { 
      catID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        field: 'cat_id'
      },
      resourceType: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'resource_type'
      },
      catDescription: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'cat_description'
      },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ResourceCats');
  }
};
