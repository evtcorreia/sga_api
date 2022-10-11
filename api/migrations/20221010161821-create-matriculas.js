'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ano: {
        type: Sequelize.STRING
      },
      dt_matricula: {
        type: Sequelize.DATE
      },
      aluno_id:{
        type:Sequelize.INTEGER,
        references:{model:'Alunos',key:'id'}
      },
      turma_id:{
        type:Sequelize.INTEGER,
        references:{model:'Turmas', key:'id'}
      },
      ano_letivo_id:{
        type:Sequelize.INTEGER,
        references:{model:'Ano_Letivos',key:'id'}
      },
      status_matricula_id:{
        type:Sequelize.INTEGER,
        references:{model:'Status_Matriculas', key:'id'}
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
    await queryInterface.dropTable('Matriculas');
  }
};