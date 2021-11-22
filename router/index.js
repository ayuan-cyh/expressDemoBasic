//这个文件用于统一管理所有的后端路由

const express = require('express')
const router = express.Router()

//测试接口
router.use('/test', require('./test/index'))




module.exports = router









