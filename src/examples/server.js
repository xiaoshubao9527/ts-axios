const express = require('express');//引入 node的服务器框架 express
const bodyParser = require('body-parser');//body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析
const webpack = require('webpack');//引入webpack模块
const webpackDevMiddleware = require('webpack-dev-middleware');
//生成一个与webpack的compiler绑定的中间件，
//然后在express启动的服务app中调用这个中间件。
//通过watch mode，监听资源的变更，然后自动打包, 快速编译，走内存；
const webpackHotMiddleware = require('webpack-hot-middleware');//实现热更新
const WebpackConfig = require('./webpack.config');//引用webpack的配置文件
const router = express.Router()
const app = express()//;实例化 express对象
const compiler = webpack(WebpackConfig)//按照配置文件进行 预编译缓存

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router) //调用路由
// 第一个初始化的基本请求
router.get('/simple/get', function(req, res) {//当请求到 "/simple/get" 时 返回一个json数据
  res.json({
    msg: `hello world`
  })
})
// 第二个url的请求
router.get('/base/get', function(req, res) {
  res.json({
    msg: 'base/get',
    requestMSG: req.query
  })
})
router.post('/base/post', function(req, res) {
  console.log(req.body)
  res.send({
    msg: 'base/post',
    requestBodyMsg: req.body,
    requestQueryMsg: req.query
  })
})
const port = process.env.PORT || 7080
module.exports = app.listen(port, () => {//打开8080端口
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})