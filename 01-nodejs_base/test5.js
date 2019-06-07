/**
 * Created by hjb2722404 on 2015/11/3.
 */

// 使用 http 包创建一个简单的http服务

var http = require('http');
http.createServer(function(req,res){
    res.end('Hello World\n');
}).listen(3000,"127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');