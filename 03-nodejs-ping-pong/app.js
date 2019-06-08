/**
 * Created by hjb2722404 on 2015/11/12.
 */

 // nodejs 中的 socket ping-pong通讯

 // 先运行 npm install 安装依赖，
 //然后运行app.js,
 //然后浏览器打开127.0.0.1:3000
 //打开开发者工具观察服务端和客户端的console输出

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    fs.readFile('./index.html',function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data,'utf-8');
    })
}).listen(3000,'127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');

var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){

    socket.on('ping',function(data){
        console.log('Received PING .Send Pong');
        socket.emit('pong',{text:'PONG'});
    });

    socket.on('pong',function(data){
        console.log('Received PONG response PONG!');
    });

    setInterval(function(){
        console.log('Sending PING to client..');
        socket.emit('ping',{text:'PING'});
    },10000);
});
