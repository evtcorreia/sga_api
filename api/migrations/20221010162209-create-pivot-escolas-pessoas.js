'use strict';

const escolas = require('../models/escolas');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pivot_Escolas_Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      escola_id: {
        type: Sequelize.INTEGER,
        references:{model:'Escolas',key:'id'}
      },
      pessoa_id: {
        type: Sequelize.INTEGER,
        references:{model:'Pessoas',key:'id'}
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
    await queryInterface.dropTable('Pivot_Escolas_Pessoas');
  }
};