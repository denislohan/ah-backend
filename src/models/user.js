const DbConnection = require('../dbConnection'),
    Sequelize = require('sequelize');

class User{
    constructor(){
        var sequelize = DbConnection.getConnection();
        this.userSchema = sequelize.define('users', {
            username: {
              type: Sequelize.STRING,
              unique: {
                  args: true,
                  msg: 'username already in use!'
              },
              
            },
            password: {
              type: Sequelize.STRING
            }
          }, {
            freezeTableName: true // Model tableName will be the same as the model name
          });    
    }
    
    getUserSchema(){
        return this.userSchema;
    }

    async signin(data){
        console.log('signing innnnnnnnn')
    let userSchema = this.userSchema;
        return userSchema.findOne({
            where: {
                username: data.username
                }
    });
  }

    async signup(data){
        let userSchema = this.userSchema;
        return await userSchema.sync({force: false})
            .then(async function () {
                

                return await userSchema.create({
                    username: data.username,
                    password: data.password
            })


        }).catch((err)=>{
            return err
    })
    }
}

module.exports = User;
   
