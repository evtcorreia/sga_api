'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Salas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      escola_id:{
        type:Sequelize.INTEGER,
        references:{model:'Escolas',key:'id'}
      },
      capacidade:{
        type:Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('Salas');
  }
};