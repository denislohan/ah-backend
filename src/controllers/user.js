const Controller = require('./controller')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt=require('jsonwebtoken');
require('dotenv').config()



class User extends Controller{
    constructor(){
        super()
    }

    async signup(req,res){

        var resp
         req.body = req.body ? req.body : req

         req.body.password = await bcrypt.hash(req.body.password, saltRounds)
         
         resp = await super.postDb(req.body,'user');





        //  await bcrypt.hash(req.body.password, saltRounds, async (err,hash)=>{
        //     req.body.password=hash;
        //     resp = await super.postDb(req.body,'user');
        //     console.log(resp)
        //         // .then((results)=>{
        //         //     if(results['dataValues']){
        //         //         results['dataValues'].password = 'ommited';
        //         //     }
        //         //     console.log("error  ")
        //         //     return results // splint into two to analyse different status
        //         // })
        //         // .catch((err)=>{
        //         //     console.log('controller error')
        //         //     return err    
        //         // })
        // })
        return resp;
           
    }

    async signin(req){

        console.log('in signin.......'+process.env.tokenKey)
        console.log(process.env.NODE_ENV)
         return super.readDb(req.body,'user')
            // .then((user)=>{
            //         console.log("User "+user.id)
            //         bcrypt.compare(req.password,user.password, (err, loggedIn)=>{
            //             if (loggedIn){
            //                  console.log('logged in' + process.env.tokenKey)
            //                  token = jwt.sign({userId:user.id},process.env.tokenKey);
            //                  res.status(200).json({
            //                     userId:user.id,
            //                     username:user.username,
            //                     token
            //                 })
            //             }
            //             else{
            //             }
            //         })
            //     })
            
     }
    
}

module.exports=User;