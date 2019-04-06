const Controller = require('./controller')

class Chat extends Controller{

    constructor(model){
        super(model)
        console.log('initializing chat API...')
    }

    async postChat(req,res,next){
        if(req.headers.token){ // change to the actual checker, not token biased

            // factory pattern in work
            
            try {
                // adapter pattern in  work
                super.postDb(req.query,'chat')
                res.json({
                    feeback: 'Succefully Posted'
                })
            }
                catch(err){
                    res.json({
                        feeback: 'invalid user'
                    })
                }
        }
        else 
            res.json({
                feeback: 'user not authenticated'
            })
    }

}

module.exports=Chat;