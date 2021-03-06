# blog

- 一个基于 node 和 MongoDB 实现的一个 blog, 采用混合开发。
- 运用：nodejs、MongoDB、JQuery、bootstrap

## 1. 目录结构

```shell
.
|—— app.js
|—— controllers
|—— models
|—— node_modules      第三方包
|—— package.json      包描述文件
|—— package-lock.json 第三方包版本锁定文件
|—— public            公共的静态资源
|—— README.md					项目说明文档
|—— router						路由
|—— views							存储视图目录
```

## 2. 模板页

- art-template 子模板
- art-template 模板继承

## 3. 路由设计

| 路径      | 方法 | get 参数 | post 参数                 | 是否需要权限 | 备注         |
| --------- | ---- | -------- | ------------------------- | ------------ | ------------ |
| /         | GET  |          |                           |              | 渲染页面     |
| /register | GET  |          |                           |              | 渲染注册页面 |
| /register | POST |          | email、nickname、password |              | 处理注册请求 |
| /login    | GET  |          |                           |              | 渲染登录页面 |
| /login    | POST |          | email、 password          |              | 处理登录请求 |
| /logout   | GET  |          |                           |              | 处理退出请求 |
|           |      |          |                           |              |              |
|           |      |          |                           |              |              |
|           |      |          |                           |              |              |
|           |      |          |                           |              |              |

## 4. 模板设计

## 5. 功能实现

## 6. 书写步骤

- 创建目录结构
- 整合静态页面-模板页
+ include
+ block
+ extend

- 设计用户登录、退出、注册的路由
- 用户注册
  + 先处理好客户端页面的内容(表单控件的name、收集表的数据、发起请求)
  + 服务端
    * 获取客户端表单请求数据
    * 操作数据库
    * 如果有错，发送500告诉客户端服务器错了
    * 其他的根据业务发送不同的响应
- 用户登录
- 用户退出
