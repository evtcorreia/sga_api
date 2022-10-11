'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pivot_Disciplinas_Professores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      professores_id: {
        type: Sequelize.INTEGER,
        references:{model:'Professores', key:'id'}
      },
      disciplinas_id: {
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
    await queryInterface.dropTable('Pivot_Disciplinas_Professores');
  }
};