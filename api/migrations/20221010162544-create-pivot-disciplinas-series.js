'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pivot_Disciplinas_Series', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serie_id: {
        type: Sequelize.INTEGER,
        references:{model:'Series', key:'id'}
      },
      disciplina_id: {
        type: Sequelize.INTEGER,
        references:{model:'Disciplinas', key:'id'}
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
    await queryInterface.dropTable('Pivot_Disciplinas_Series');
  }
};