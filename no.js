Array.prototype._map = function(fn, context) {
    // 首先定义一个数组来保存每一项的运算结果，最后返回
    var temp = [];
    debugger
    if(typeof fn == 'function') {
      var k = 0;
      var len = this.length;
      // 封装for循环过程
      for(; k < len; k++) {
        // 将每一项的运算操作丢进fn里，利用call方法指定fn的this指向与具体参数
        temp.push(fn.call(context, this[k], k, this))
      }
    } else {
      console.error('TypeError: '+ fn +' is not a function.');
    }
  
    // 返回每一项运算结果组成的新数组
    return temp;
  }
  
  var newArr = [1, 2, 3, 4]._map(function(item) {
    return item + 1;
  })
  // [2, 3, 4, 5]