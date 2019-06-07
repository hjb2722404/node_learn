/**
 * Created by hjb2722404 on 2015/11/9.
 */

 // 异常捕获

function someFunction(){
    return undefinedVar;
}
function notDefined(){
    try{
        someFunction();
    }   catch (e){
        console.log("error");
        console.error(e);
    }
}
notDefined();