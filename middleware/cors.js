//跨域中间件 用来设置跨域
const cors = require("cors")

module.exports = cors({
  //当axios配置了withCredentials，需要设置具体的地址，以及credentials 如果为空代表运行所有服务器发起跨域请求
  // origin: ['http://localhost:8081', 'http://localhost:8080'],
  // credentials: true
})








