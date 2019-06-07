/**
 * Created by hjb2722404 on 2015/11/3.
 */

 //认识回调函数的使用

function haveBreakfast(food,drink,callback){
    console.log('Having breakfast of '+food+','+drink);
    if(callback && typeof(callback) === "function" ){
        callback();
    }
}

haveBreakfast('toast','coffee',function(){
    console.log('Finished breakfast. Time to go to work!');
});