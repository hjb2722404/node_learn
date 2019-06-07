/**
 * Created by hjb2722404 on 2015/11/3.
 */

 //利用 http 模块的 res 对象进行 301 重定向操作

var http = require('http');
http.createServer(function(req,res){
    res.writeHead(301,{
        'Location':'http://www.baidu.com/'
    });
    res.end();
}).listen(3000,"127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');