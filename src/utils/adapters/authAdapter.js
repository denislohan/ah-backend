const StraTegyFactory= require('../StrategyFactory')



class AuthAdapter{


    

    verify(authStrategy,req){
       

        return authStrategy.verify(req);

    }
    

}

module.exports=AuthAdapter