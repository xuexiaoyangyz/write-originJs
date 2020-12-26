/**
 * 组合函数的实现
 * @param  {...any} funcs 
 * 
 */


function compose(...funcs){
    return function (x) {
        return funcs.reduce(function(arg,fn){
            return fn(arg)
        },x)
    }
}