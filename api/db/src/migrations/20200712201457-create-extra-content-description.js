'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ExtraContentDescriptions', { 
      extraDescriptionID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        field: 'extra_description_id'
      },
      extraDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'extra_description'
      },
      contentID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ResourceContent',
          key: 'content_id'
        },
        field: 'content_id'
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ExtraContentDescriptions');
  }
};
