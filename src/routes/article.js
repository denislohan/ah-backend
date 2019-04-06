

const express =require('express')
const router = express.Router()
const Article = require('../controllers/article')
const ArticleApi= new Article();

router.post('/create',ArticleApi.create)

module.exports=router