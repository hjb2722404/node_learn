/**
 * Created by hjb2722404 on 2015/11/24.
 */
/*接收SIGINT信号*/
// 使用node运行后按Ctrl+C结束程序，就会触发SIGINT事件

process.stdin.resume();

process.on('SIGINT',function(){
    console.log('Got a SIGINT,EXITING');
    process.exit(0);
});