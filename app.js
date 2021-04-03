var express = require("express");
var path = require("path");
var router = require('./router');
var bodyParser = require('body-parser');
var session = require("express-session");

var app = express();

// 开放静态资源
app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));
app.use(bodyParser.urlencoded ({ extended : false}));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false
  // 需要开启https才可以进行下面命令
  // cookie: { secure: true }
  }))


app.engine('html', require('express-art-template'));

// 在 Express 这个框架中，默认不支持Session和Cookie，我们可以使用中间件：express-session
// 挂载路由
app.use(router);


// 定义 404 错误页面
app.use((req, res)=> {
  res.render('404.html')
})

//配置错误全局处理中间件
app.use((err, req, res, next) => {
  return res.status(200).json({
    err_code: 500,
    message: err.message
  })
})

// 监听端口并开启服务
app.listen(3000, () => {
  console.log("runing...");
})