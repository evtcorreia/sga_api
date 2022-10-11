'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Professores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      masp: {
        type: Sequelize.STRING
      },
      pessoa_id:{
        type:Sequelize.INTEGER,
        references:{model:'Pessoas', key:'id'}
      },
      status_professor_id:{
        type:Sequelize.INTEGER,
        references:{model:'Status_Professores', key:'id'}
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
    await queryInterface.dropTable('Professores');
  }
};