/**
 * Created by hjb2722404 on 2015/11/3.
 */

// 利用 http 模块的 res 对象修改http响应头信息

var http = require('http');
http.createServer(function(req,res){
        res.writeHead(200,{
            'content-Type':'text/plain'
        });
    res.end('Hello world22\n');
}).listen(3000,'127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');