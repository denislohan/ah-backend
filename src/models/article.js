const DbConnection = require('../dbConnection'),
    Sequelize = require('sequelize');
var articleSchema = require('./models/arti_cle')

class Article{

    constructor(){
        var sequelize = DbConnection.getConnection();
         this.articleSchema = articleSchema(sequelize,Sequelize);
    }
    
      getArticleSchema(){
        return this.articleSchema;
      }

async create(data){
    let articleSchema = this.articleSchema;

    return await articleSchema.sync({force: false})
    .then(async function () {
        console.log(articleSchema)
         return articleSchema.create({
            title: data.title,
            userId: data.userId,
            body: data.body
        })
})
    .catch((err)=>{
        console.log('model errr')
        console.log(err.message)
        err.status = '500'

        return err
    })
       
  }
}

module.exports = Article;
   
