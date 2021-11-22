//连接数据库的中间件文件
const mongoose = require('mongoose')

mongoose
  .connect("mongodb://testuser:admin@localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => { console.log("数据库连接成功...") })
  .catch(e => { console.log("数据库连接失败", e) })









