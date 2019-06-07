/**
 * Created by hjb2722404 on 2015/11/11.
 */

 // 断言测试模块的应用

var assert = require('assert');
//assert.strictEqual('hello','hello');
//
//assert.equal('hello','hello','oo');

//assert.strictEqual('8',8);

console.log("right result start");

assert.equal('8',8);

console.log("right result end");

console.log("error result start");

assert.equal('8',9);

console.log("error result start");