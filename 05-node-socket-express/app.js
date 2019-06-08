// 使用 express和socketio 实现简单聊天室功能


var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);

server.listen(3000);
var io = socketio.listen(server);

var nicknames = [];

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){
    socket.emit('welcome',{text:'OH,HAI! U R CONNECTED'});
    socket.on('nickname',function(data,callback){
        if(nicknames.indexOf(data) != -1){
            callback(false);
        }else{
            callback(true);
            console.log('The server received the following nickname: ' +data);
            nicknames.push(data);
            socket.nickname = data;
            console.log('Nicknames are ' + nicknames);
            io.sockets.emit('nicknames',nicknames);
        }
    });

    socket.on('user message',function(data){
        io.sockets.emit('user message',{
            nick:socket.nickname,
            message:data
        });
    });

    socket.on('disconnect',function(){
        if(!socket.nickname){
            return;
        }
        if(nicknames.indexOf(socket.nickname) > -1){
            nicknames.splice(nicknames.indexOf(socket.nickname),1);
        }
        console.log('Nicknames are '+nicknames);
        io.sockets.emit('nicknames',nicknames);

    });
});