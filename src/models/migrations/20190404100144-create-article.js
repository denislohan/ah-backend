'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      body: {
        type: Sequelize.STRING,
        allowNull: {
            args:false,
            msg: "the article body can not be null"
        }
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg:"user Id should never be null"
        }
      },
      title: {
          type: Sequelize.STRING,
          allowNull:{ 
              args: true,
              msg:"Title Id should never be null"
          },

          len: {
              args: [5,40],
              msg:"the lengnth should be 2 - 50 charactors"
          }
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Articles');
  }
};