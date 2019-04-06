

const express =require('express')
const router = express.Router()
const Chat = require('../controllers/chat')
const ChatApi= new Chat();

router.get('',ChatApi.postChat)

module.exports=router