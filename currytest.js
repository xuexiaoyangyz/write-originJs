// arity 用来标记参数的个数
// args 用来收集参数
function createCurry(func, args) {
    var arity = func.length;
  
    // 第一次执行不会传入args，而是默认为空数组
    var args = args || [];
  
    var wrapper = function () {
      // 将wrapper中的参数收集到args中
      var _args = [].slice.call(arguments);
      [].push.apply(_args, args);
  
      // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
      if (_args.length < arity) {
        return createCurry(func, _args);
      }
  
      // 参数收集完毕，则执行func
      return func.apply(this, _args);
    }
  
    return wrapper;
  }

function _map(array, func) {
    console.log('array',array)
    console.log('func',func)
    console.log(array.map(func))
    return array.map(func);
  }
  
  var _getNewArray = createCurry(_map);
  
  var getNewArray = _getNewArray(function(item) {
    return item * 100 + '%'
  })([1, 2, 3, 0.12])
  
//   getNewArray([1, 2, 3, 0.12]);   // ['100%', '200%', '300%', '12%'];
//   getNewArray([0.01, 1]); // ['1%', '100%']
// 科里化  收集参数，将所有参数都收集完，最后一起执行
// 组合函数，compose  将两个函数合并  一个函数执行完的结果当做参数传给第二个函数 ，



function check( targetString,reg ) {
    console.log('reg',reg)
    console.log('targetString',targetString)
    console.log(reg.test(targetString))
    return reg.test(targetString);
  }
  var _check = createCurry(check);

var checkPhone = _check(/^1[34578]\d{9}$/);
var checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

checkPhone('133888889');