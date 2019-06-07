/**
 * Created by hjb2722404 on 2015/11/24.
 */
/*使用kill命令*/

//使用node运行后，新建一个终端，按照提示运行相关命令

process.on('SIGINT',function(){
    console.log('Got a sigint,Exiting');
});

process.on('SIGTERM',function(){
   console.log('Got a sigterm,Exiting');
});

setInterval(function(){},1000);

console.log('Run kill '+process.pid+' to send a SIGTERM');
console.log('Run kill -s SIGINT '+process.pid+' to send a SIGINT');