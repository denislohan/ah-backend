//import express from 'express'
const express = require('express')

require('dotenv').config()

const app = express()
const chatRoutes = require('./routes/chat')
const userRoutes = require('./routes/user')
const articleRoutes = require('./routes/article')

var bodyParser = require('body-parser')
const passport=require('passport')

const StraTegyFactory= require('./utils/StrategyFactory')
const AuthAdapter = require('./utils/adapters/authAdapter')
//require('./utils/authentication/passport')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(passport.initialize())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const isLoggedIn = (req,res,next) =>{
    if(req.originalUrl.indexOf('auth')==-1)
    {
        const authAdapter = new AuthAdapter();
        var straTegyFactory = new StraTegyFactory(),  
        authStrategy = straTegyFactory.createAuthStrategy(req);
        try{
            authAdapter.verify(authStrategy,req)
            next()
        } catch(err){
            res.status(401).json({
                feeback: 'Not Authorized'
            })
        }
    }
    else
        next()

}

app.use(isLoggedIn);
app.use('/article',articleRoutes);
app.use('/chat',chatRoutes);
app.use('/api/user',userRoutes);






app.listen(3001,()=>{console.log('listening on port 3001')})
