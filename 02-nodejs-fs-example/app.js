var fs = require('fs');


var data = 'some data i want to write to a file';
fs.writeFile('file.txt',data,function(err){
    if(!err){
        console.log('wrote data  to file.txt');
    }else{
        throw err;
    }
});

fs.readFile('file.txt','utf8',function(err,data){
    if(!err){
        console.log(data);
        console.log(process.env.HOME);
    }else{
        throw err;
    }
});



