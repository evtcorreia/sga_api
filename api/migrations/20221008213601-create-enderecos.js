'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logradouro: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      complmento: {
        type: Sequelize.STRING
      },
      municipio_id:{
        type: Sequelize.INTEGER,
        references:{model:'Municipios', key:'id'}
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
    await queryInterface.dropTable('Enderecos');
  }
};