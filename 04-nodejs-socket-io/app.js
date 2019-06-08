/**
 * Created by hjb2722404 on 2015/11/12.
 */

 //nodejs 中的socketio 通讯

// 先运行 npm install 安装依赖，
 //然后运行app.js,
 //然后在浏览器多个标签打开127.0.0.1:3000
 //打开开发者工具观察服务端和客户端的console输出以及客户端页面信息的变化

var http = require('http');
var fs = require('fs');
var count = 0;

var server = http.createServer(function(req,res){
    fs.readFile('./index.html',function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data,'utf-8');
    })
}).listen(3000,'127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');

var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
    count++;
    console.log('User connect.'+count+'user(s) present');
    socket.emit('users',{number:count});
    socket.broadcast.emit('users',{number:count});
    socket.on('disconnect',function(){
        count--;
        console.log('User disconnected.'+count+'user(s) present');
        socket.broadcast.emit('users',{number:count});
    });
});