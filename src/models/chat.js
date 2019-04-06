const DbConnection = require('../dbConnection'),
    Sequelize = require('sequelize');

class Chat{

    constructor(){
        var sequelize = DbConnection.getConnection();
        this.chatSchema = sequelize.define('chat', {
            message: {
              type: Sequelize.STRING,
            },
            userId: {
              type: Sequelize.STRING
            }
          }, {
            freezeTableName: true // Model tableName will be the same as the model name
          });    
    }
    
      getChatSchema(){
        return this.chatSchema;
      }

create(data){
    let chatSchema = this.chatSchema;

    chatSchema.sync({force: false}).then(function () {
    return chatSchema.create({
        message: data.message,
        userId: data.userId
    })
      // .catch((err)=>{
      //   console.log('modelMessage '+err)
      //   return err
      // })
    });
  }
}

module.exports = Chat;
   
