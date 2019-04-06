const AuthStrategy = require('../authentication/authenticationStrategy')
const jwt=require('jsonwebtoken');

class TokenStrategy extends AuthStrategy{

    constructor(){
        super()
        this.type = 'tokenStrategy'
    }

    verify(req,resp,next){
        jwt.verify(req.headers.token,process.env.tokenKey)
    }

}

module.exports=TokenStrategy