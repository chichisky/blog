# blog

- 一个基于 node 和 MongoDB 实现的一个 blog, 采用前后端分离。

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
