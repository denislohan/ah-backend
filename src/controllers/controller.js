const sequalize = require('../dbConnection')
const Chat= require('../models/chat')
const User= require('../models/user')
const Article= require('../models/article')


class Controller{
     constructor(){
     }

   

    async readDb(data,model){
        var schema;
        switch(model){

            case 'chat':
                 schema = new Chat();
                 return await schema.create(data)
            break;

            case 'user':  // for post
                  console.log('mdwr signing in ..')
                  schema = await new User();
                 return schema.signin(data)

            
        }

    }
    async postDb(data,model){
        var schema;
        switch(model){

            case 'chat':
                 schema = new Chat();
                 return await schema.create(data)
            break;

            case 'user':  // for post
                  console.log('mdwr signing up ..')
                  schema = await new User();
                 return schema.signup(data)
            
            case 'article':
                console.log('mdwr creating article')
                schema = await new Article()
                var resp = await schema.create(data);
                //console.log(resp)
                return resp

        }




    }
    deleteDb(){}
    updateDb(){}

}

module.exports=Controller;