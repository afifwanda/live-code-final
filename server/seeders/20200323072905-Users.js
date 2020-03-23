'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Users', [{
        username: 'admin',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});  
   
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
  },

  down: (queryInterface, Sequelize) => {
       return queryInterface.bulkDelete('People', null, {});  
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
  }
};
