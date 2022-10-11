'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Avaliacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      nota: {
        type: Sequelize.FLOAT
      },
      plano_ensino_id:{
        type:Sequelize.INTEGER,
        references:{model:'Plano_Ensinos', key:'id'}
      },
      serie_id:{
        type:Sequelize.INTEGER,
        refrences:{model:'Series', key:'id'}
      },
      status_avaliacoes_id:{
        type:Sequelize.INTEGER,
        references:{model:'Status_Avaliacoes', key:'id'}
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
    await queryInterface.dropTable('Avaliacoes');
  }
};