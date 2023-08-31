'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_types', [
      {
        type_name: "aluno",
        cod_type: 1
      }, 
      {
        type_name: "professor",
        cod_type: 2
      }
      
    ]);
    
  },
  async down (queryInterface, Sequelize) {
   
  }
};
