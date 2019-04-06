'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('arti_cles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false,

      },
      userId: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
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

  // up: function (queryInterface, Sequelize) {
  //   return [ queryInterface.addColumn(
  //             'searchkey',
  //              Sequelize.STRING
  //            )];
  // },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('arti_cles');
  }
};