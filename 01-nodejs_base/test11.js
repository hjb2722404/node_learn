/**
 * Created by hjb2722404 on 2015/11/9.
 */

// console.trace 用法

function notDefined(){
    console.trace();
    try{
        someFunction();
    }catch (e){
        console.log("error");
        console.error(e);
    }
}
notDefined();
