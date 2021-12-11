
# 创建完整的express项目结构
这是一个完整的express项目结构,开发中基于这个基本结构进行开发使用,这只是一个项目结构部位配置文件还需要自行配置
## 1.目录结构
--db  
--middleware
--public
--router
  	index.js
## 2.目录内容

### db目录

存放mongodb的数据库文件需要操作的数据库放在一起方便管理

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let linkSchema = new Schema({
  //名称
  name: {
    type: String,
    required: true
  },

  //主页
  home: {
    type: String,
    required: true
  },

  //logo
  logo: {
    type: String,
    required: true
  },

  //描述
  des: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('link', linkSchema)
```



### middleware目录

存放需要使用到的中间件文件如数据库,cors跨域等等

```js
//跨域中间件 用来设置跨域
const cors = require("cors")

module.exports = cors({
  //当axios配置了withCredentials，需要设置具体的地址，以及credentials 如果为空代表运行所有服务器发起跨域请求
  origin: ['http://localhost:8081', 'http://localhost:8080'],
  credentials: true
})
```



### public

静态访问的文件夹存放需要使用到的静态资源

### router

存放需要使用到的接口文件下面的接口文件同意管理路由接口

#### index.js

```
//这个文件用于统一管理所有的后端路由

const express = require('express')
const router = express.Router()

//注册接口
router.use('/reg', require('./reg/index'))

//登陆接口
router.use('/login', require('./login/index'))



module.exports = router
```

#### 管理的子接口

```js
const express = require("express")
const router = express.Router()


module.exports = router
```

### index.js

项目文件的主文件

```js
// 这是项目的主文件
//后端入口文件
const express = require('express')
const app = express()
const path = require('path')

//启动数据库
require('./middleware/mongoose')
//监听端口
app.listen(4000, () => {
    console.log("服务启动成功，端口4000...")
})

//跨域中间件
app.use(require('./middleware/cors'))
//session中间件
app.use(require('./middleware/session'))
//处理数据的中间件
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//静态资源库
app.use(express.static(path.join(__dirname, './public')))

//端口监听
app.use("/", require('./router/index'))

//解决vue中history模式 刷新/手动输入 无法访问
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

```



## 3.注意

以上目录的名称可以自己操作自己定义只是这样比较规范

## 4.运行项目

1.下载依赖

```
npm install
```

2.运行项目

直接运行主文件index.js即可

```
node index.js
```

