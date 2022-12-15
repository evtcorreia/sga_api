'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dt_nascimento: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      endereco_id:{
        allowNull: false,
        type:Sequelize.INTEGER,
        references:{model:'Enderecos', key:'id'}
      },
      status_pessoa_id:{
        allowNull: false,
        type:Sequelize.INTEGER,
        references:{model:'Status_Pessoas',key:'id'}
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
    await queryInterface.dropTable('Pessoas');
  }
};