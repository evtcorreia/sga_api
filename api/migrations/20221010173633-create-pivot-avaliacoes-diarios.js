'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pivot_Avaliacoes_Diarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      diario_id: {
        type: Sequelize.INTEGER,
        references:{model:'Diarios', key:'id'}
      },
      avaliacoes_id: {
        type: Sequelize.INTEGER,
        references:{model:'Avaliacoes', key:'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pivot_Avaliacoes_Diarios');
  }
};