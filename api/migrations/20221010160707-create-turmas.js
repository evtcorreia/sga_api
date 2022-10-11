'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identificador: {
        type: Sequelize.STRING
      },
      status_turma_id:{
        type:Sequelize.INTEGER,
        references:{model:'Turmas', key:'id'}
      },
      serie_id:{
        type:Sequelize.INTEGER,
        references:{model:'Series', key:'id'}
      },
      sala_id:{
        type:Sequelize.INTEGER,
        references:{model:'Salas', key:'id'}
      },
      status_sala_id:{
        type:Sequelize.INTEGER,
        references:{model:'Status_Salas', key:'id'}
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
    await queryInterface.dropTable('Turmas');
  }
};