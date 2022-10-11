'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Diarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status_diario_id:{
        type:Sequelize.INTEGER,
        references:{model:'Status_Diarios',key:'id'}
      },
      disciplina_id:{
        type:Sequelize.INTEGER,
        references:{model:'Disciplinas', key:'id'}
      },
      serie_id:{
        type:Sequelize.INTEGER,
        references:{model:'Series', key:'id'}
      },
      ano_letivo_id:{
        type:Sequelize.INTEGER,
        references:{model:'Ano_Letivos', key:'id'}
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Diarios');
  }
};