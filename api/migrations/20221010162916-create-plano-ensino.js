'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Plano_Ensinos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      professores_disciplinas_id:{
        type:Sequelize.INTEGER,
        references:{model:'Pivot_Disciplinas_Professores', key:'professores_id'}
      },
      status_plano_ensino_id:{
        type:Sequelize.INTEGER,
        references:{model:'Status_Plano_Ensinos', key:'id'}
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
    await queryInterface.dropTable('Plano_Ensinos');
  }
};