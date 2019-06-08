# nodejs_learn
nodejs入门学习示例代码-----a example for initiate of nodejs

## 01-nodejs_base  
>nodejs基础

* 01：第一个node脚本
* 02：认识回调函数的使用
* 03：通过 sleep() 认识线程阻塞
* 04：通过使用 http 请求来模拟真实的同步和异步场景
* 05：使用 http 包创建一个简单的http服务
* 06：利用 http 模块的 res 对象修改http响应头信息
* 07：利用 http 模块的 res 对象进行 301 重定向操作
* 08：利用http和url模块进行路由分发
* 09：异常捕获
* 10：for...in 遍历与for循环的执行时间对比
* 11：console.trace 用法
* 12：debugger 用法
* 13：变量的作用域
* 14：断言测试模块的应用
* 15：用进程模块得到脚本运行的PID
* 16：接收SIGINT信号
* 17：使用kill命令

## 02-nodejs-fs-example 

> nodejs文件读写操作示例

* 直接运行 app.js (node app.js)

## 03-nodejs-pingpong

> nodejs 中的 socket 进行ping-pong通讯

* 先运行 npm install 安装依赖，
* 然后运行app.js,
* 然后浏览器打开127.0.0.1:3000
* 打开开发者工具观察服务端和客户端的console输出

## 04-nodejs-socket-io

>nodejs 中的socket 通讯
 * 先运行 npm install 安装依赖，
 * 然后运行app.js,
 * 然后在浏览器多个标签打开127.0.0.1:3000
 * 打开开发者工具观察服务端和客户端的console输出以及客户端页面信息的变化

## 05-node-socket-express
> 使用 socketio 和 express 实现一个简单的聊天室

* 先运行 npm install 安装依赖
* 然后运行 app.js
* 然后在过个浏览器标签打开127.0.0.1:3000
* 在每个打开的页面上执行发送消息的操作
* 观察各个页面的变化，观察服务端与客户端的console输出

## 06-nodejs-unit-test
> nodejs 单元测试示例

* 先运行 npm install 安装依赖
* 然后运行 npm run test 运行测试用例
* 观察命令行终端内的输出

## 07-express-post-example
> express 框架表单提交及服务端响应示例

* 先运行 npm install 安装依赖
* 然后运行 npm run start 启动程序
* 浏览器打开 127.0.0.1:3000 页面
* 填写表单并提交
* 观察服务端的输出及客户端的变化

## 08-express-routing-example
> express 路由机制示例

* 先运行 npm install 安装依赖
* 然后运行 npm run start 启动程序
* 浏览器打开 127.0.0.1:3000 页面
* 然后在打开 127.0.0.1:3000/users 页面
* 观察页面输出

## 09-jade
> jade 模板语法学习

* 先运行 npm install 安装依赖
* 然后运行 npm run start 启动程序
* 浏览器打开 127.0.0.1:3000 页面,查看 jade mixin示例 效果
* 浏览器打开 127.0.0.1:3000/var 页面,查看 jade 变量输出示例 效果
* 浏览器打开 127.0.0.1:3000/struc 页面,查看 jade 缩进结构示例 效果