/**
 * reduce(function fn(total,cur,index,arr),first)
 * fn 传入的方法
 *  total: 如果没传first ,total为arr数组的第一个元素  如果传入first total为 first
 *  cur : 如果没传first,    cur为arr数组的第二个元素   如果传入first cur 为数组的第一个元素
 *  index: 如果没传first, index 从1开始             如果传入first index 从0开始
 *  arr: 当前执行的数组
 * first fn函数第一次执行时的total.
 * 实现思路： 1.创建一个变量来存每次执行之后的结果，再传入下一次执行中
 *          2. 循环this.length次
 */

Array.prototype.myReduce = function (fn,first){
    let len = this.length
    let result = null 
    if(first){
        result = first
        let i = 0
        for(i;i<len;i++){
            result = fn(result,this[i],i,this)
        }
    }else{
        result = this[0]
        let j = 1
        for(j;j<len;j++){
            result = fn(result,this[j],j,this)
        }
    }
    return result
 }

let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
const newArr = function(arr){
   return arr.myReduce((pre,cur)=>pre.push(Array.isArray(cur)?newArr(cur):cur),[])
}
console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]


/**
 * map
 * map的实现其实是对for循环的封装，是一种高阶函数的运用。将函数作为参数传进来。
    * arr.map(function fn(item,index,arr),thisArg)
    * fn 传入的函数
        * item 每次循环中数组的值
        * index 每次循环中的下标
        * arr 循环的数组本身
    * thisArg fn函数的this指向。 如果为function 定义的函数，可以正常获取，如果为箭头函数，则获取不到
    1. 创建一个空数组，之后返回用
    2. 开始for循环，终止条件为调用数组的长度，即this.length
    3. 调用传进来的函数fn，将this指向传进来的第二个参数  执行结果塞到空数组中
    4. return  空数组
 * @param {*} fn 
 * @param {*} context 
 */
Array.prototype._map = function (fn,context) {
    const tmpArr = []

    if(typeof fn === 'function'){
        const len = this.length
        let i = 0
        for(i;i < len; i++){
            const ret = fn.call(context,this[i],i,this)
            tmpArr.push(ret)
        }
    }else {
        conosle.error('TypeError: '+ fn +' is not a function.')
    }

    return tmpArr

}

const array = [1,2,3,4,5]
// const array1 = [3,4,6,7,2]

const t = array._map((e,i)=>{
    console.log(e)
    console.log(this)
},[7,7,7,7,7])
console.log(t)

/**
 * bind
 * 返回一个新的函数，执行时，this指向传入的第一个参数， 新的函数继承bind时传入的其他参数
 * 
 */

Array.prototype.myBind = function (){
    const arg = Array.from(arguments)
    const ctx = arg.shift()
    // 此时this指向要执行的那个函数 下面apply调用这个函数
    const self = this
    return function (){
        const inArg = Array.from(arguments)
        return self.apply(ctx,[...arg,...inArg])
    }
}

var num = 3
const obj = {
    num : 5,
    getNum:function (){
        const arg = Array.from(arguments)
        return arg
    }
}
console.log(obj.getNum(1))
const fun = obj.getNum
console.log(fun(1))
const bindFun = fun.myBind(obj,4,5,6)
console.log(bindFun(1))

/**
 * instanceof
 * syntax     object instanceof constructor
 * 判断constructor。prototype 是否存在于 object的proto chian上面
 * step:
 * 1.判断左面是否为object  不是的话 return  false
 * 2.拿到左面的第一层原型对象  可以使用  Object.getPrototypeOf (Object内置方法)
 * 3.递归   用右面的原型链 与左面的原型链比较   
 *          终止条件 ： -1 左面没有上层原型 reutrn false  
 *                    -2 匹配成功 return true (这里用==匹配 因为如果是继承的话，他们的方法肯定是互通的。不会存在一面有，一面没有的情况)
 *          将原型指向上一层原型 
 */

function myInstanceof(left, right){
    if( typeof left !== 'object' || left === null ){
        return false
    }
    let parentProto = Object.getPrototypeOf(left)
    while (true) {
        if(parentProto == null){
            return false
        }
        if(parentProto == right.prototype){
            return true
        }
        parentProto = Object.getPrototypeOf(parentProto)
    }
}

/**
 * call 实现
 * 主要是参数的收集，和改变函数的this指向
 * 
 */
Function.prototype.myCall = function (thisArg = window,...arg) {
    if(typeof this !== 'function'){
        throw new TypeError('this is not a function')
    }
    const fn = Symbol('thisFn')
    thisArg[fn] = this
    const result = thisArg[fn](...arg)
    delete thisArg[fn]
    return result
}

/**
 * 深拷贝
 *   数组对象，做统一处理
 * 用for in 循环
 */
function deepCopy(obj){
    const result = Array.isArray(obj) ? [] : {}

    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            if(typeof object[key] === 'object' && object.key !== null){
                result[key] = deepCopy(object[key])
            }else{
                result[key] = object[key]
            }
        }
    }
    return result
}

