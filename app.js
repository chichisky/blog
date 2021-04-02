var express = require("express");
var path = require("path");
var router = require('./router');
var bodyParser = require('body-parser');

var app = express();

// 开放静态资源
app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));
app.use(bodyParser.urlencoded ({ extended : false}));
app.use(bodyParser.json());

app.engine('html', require('express-art-template'));

// 挂载路由
app.use(router);

// 监听端口并开启服务
app.listen(3000, () => {
  console.log("runing...");
})