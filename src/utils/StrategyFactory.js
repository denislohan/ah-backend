const TokenStrategy = require('../utils/authentication/tokenStrategy')

class StraTegyFactory{
    constructor(){
    }

    createAuthStrategy(req){
        if(req.headers.token){
            return new TokenStrategy();
        }
        else{
            // return new  someOtherStrategey
        }












        
    }
}

module.exports=StraTegyFactory