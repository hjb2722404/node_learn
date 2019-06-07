/**
 * Created by hjb2722404 on 2015/11/10.
 */

// 变量的作用域——复制代码到浏览器开发者工具console中运行

var foo = function () {
  var a = 3, b = 5;
  var bar = function () {
    var b = 7, c = 11;
    a += b + c;
  };
  bar();
  console.log(a);
};

foo();