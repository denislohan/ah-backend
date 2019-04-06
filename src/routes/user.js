

const express =require('express')
const router = express.Router()
const User = require('../controllers/user')
var passport = require("../utils/authentication/passport");


//router.post('/signup',UserAPI.signup)


router.get('/auth/facebook',passport.authenticate("facebook"))

router.get('/auth/facebook/callback', passport.authenticate('facebook',(err,user,info)=>{
    console.log(user['dataValues']? user['dataValues'] : user.message)
    console.log(info)
    console.log(err)
    // res.json({

    // })
}))
router.get('/auth/linkedin',passport.authenticate("linkedin"))

router.get('/auth/linkedin/callback', 

function(req, res, next) {
    passport.authenticate('linkedin',(err,user,info)=>{

    // console.log(err)
    // console.log(info)
    // console.log(user)

    res.json({
        info: info
    })



    //console.log(user['dataValues']? user['dataValues'] : user.message)
    // res.json({

    // })
})
})

router.post('/auth/local', function(req, res, next) {
    passport.authenticate("local",(err,user,info)=>{
        // console.log(err)
        // console.log(info)
        // console.log(user)

        if (err)
            res.send(err)
        else
            if(info)
            res.status(200).json({
                err:info,
            })      
             else
                res.status(200).json({
                    info:info,
                    userId:user.id,
                    username:user.username,
                    token:user.token,
                    err:user.message
                })   
    })(req, res, next);
})

module.exports=router