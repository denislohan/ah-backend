const Controller = require('./controller')
class Article extends Controller{

    constructor(model){
        super(model)
        console.log('initializing chat API...')
    }

    async create(req,res){
        console.log('article controlerrrrr')
                super.postDb(req.body,'article')
                .then((data)=>{
                    console.log('cotroller data')
                    //console.log(data)
                    res.status(data.status || 200).json({
                        feedback:data.message || data['dataValues']
                        
                    })
                })
                .catch((err)=>{
                    console.log('controller err')
                    console.log(err)
                    console.log('done logging')
                    return err;

                })
                
    }

    async update(){}
    async delete(){}
    async read(){}
}

module.exports=Article;