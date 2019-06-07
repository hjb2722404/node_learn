/**
 * Created by hjb2722404 on 2015/11/9.
 */

// for...in 遍历与for循环的执行时间对比

var sum = 0;
var arr = new Array(1000000);

for(var i =0; i< arr.length;i++){
    arr[i] = Math.random();
}

console.time('for-loop-1');
for(var i in arr){
    sum += arr[i];
}

console.timeEnd('for-loop-1');

console.time('for-loop-2');
for(var i=0; i<arr.length; i++){
    sum += arr[i];
}

console.timeEnd('for-loop-2');