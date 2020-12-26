// const list = [['a','b','c'],['A','B','C'],[1,2,3]]

// 3
// function fib (n) {
//     if (n <= 1){
//         return 1
//     }
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(2))
//  0 1 
//  1 1
//  2 2
//  3 3
//  4 5
 // 加缓存
// function fib (n){
//     let map = {}
//     return ceche(n, map);
// }

// function ceche( n, map ){
//     if( n === 0){
//         return 0
//     }
//     if( n === 1 || n === 2){
//         return 1
//     }
//     if(map[n]){
//         return map[n]
//     }
//     const res = ceche(n-2,map) + ceche(n-1,map)
//     map[n] = res
//     return res
// }

// console.log(fib(8))


// function fibDp(n){
    
//     const dp = new Array(n);

//     dp[0] = 0
//     dp[1] = 1

//     for(let i = 2; i<= n; i++){
//         dp[i] = dp[i - 1 ] + dp[i -2 ]
//     }
//     return dp[n]



// }

// console.log(fibDp(8))

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//       console.log(i);
//     }, i * 1000);
//   }

//   for (var i = 1; i <= 5; i++) {
//     (function (i){
//         setTimeout(function timer() {
//             console.log(i);
//           }, i * 1000)
//     })(i)
//   }

// var person = (function (){
//     let name = 'xxy'
//     let instanse = null

//     function initInstanse(){
//         return {
//             getName : () => name,
//             setName : (value) => {
//                 name = value
//             }
//         }
//     }

//     return {
//         getInstanse: () => {
//             if(!instanse){
//                 instanse = initInstanse()
//             }
//             return instanse
//         }
//     }
// })()

// const a = person.getInstanse()
// const b = person.getInstanse()
// console.log(a.getName());
// a.setName('x')
// console.log(b.getName());


// arr.map(()=>{},)


// Array.prototype._map = function (fn,context) {
//     const tmpArr = []

//     if(typeof fn === 'function'){
//         const len = this.length
//         let i = 0
//         for(i;i < len; i++){
//             const ret = fn.call(context,this[i],i,this)
//             tmpArr.push(ret)
//         }
//     }else {
//         conosle.error('TypeError: '+ fn +' is not a function.')
//     }

//     return tmpArr

// }

// const array = [1,2,3,4,5]
// // const array1 = [3,4,6,7,2]

// const t = array._map((e,i)=>{
//     console.log(e)
//     console.log(this)
// },[7,7,7,7,7])
// console.log(t)

// function fn (n){
//     // 迭代 第一步 找到return的条件
//     if(n === 0){
//         return 0
//     }
//     if(n === 1 || n === 2){{
//         return 1
//     }}
//     return fn(n - 1) + fn(n - 2)
// }

// 加缓存
// function fib (n){
//     let cache = {}
//     return fn(n,cache)

// }

// function fn (n,cache){
//     if(n === 0 ){
//         return 0 
//     }
//     if(n === 1 || n === 2){
//         return 1
//     }
//     if(cache[n]){
//         return cache[n]
//     }
//     const ret1 = fn(n-1,cache) + fn(n-2,cache)
//     cache[n] = ret1
//     return ret1
// }


// console.log(fib(12))

// 数组扁平化
// const arr = [1,[2,3,[4,5,[6,7,8,9]]]]

// hack
// console.log(arr.toString().split(','))

// 迭代
// function flat (arr) {
//     const tmp = []
//     arr.forEach(e=>{
//         if(typeof e ===  )
//     })
// };

// function flat(arr){

//     const tmp = arr.reduce((pre,cur)=>{
//         if(Array.isArray(cur)){
//             return pre.concat(flat(cur))
//         }else{
//             return pre.concat(cur)
//         }
//     },[])
//     return tmp
// }

// function isArray (value){
//     const type = Object.prototype.toString.call(value)
//     console.log(type)
// }

// console.log(flat(arr))

// let arr = [1,2,3,4,4,1]

// let newArray = arr.reduce(function(a,b,c,d){
//     console.log(this)
// },[])
// console.log(newArray)

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

// Array.prototype.myReduce = function (fn,first){
//     let len = this.length
//     let result = null 
//     if(first){
//         result = first
//         let i = 0
//         for(i;i<len;i++){
//             result = fn(result,this[i],i,this)
//         }
//     }else{
//         result = this[0]
//         let j = 1
//         for(j;j<len;j++){
//             result = fn(result,this[j],j,this)
//         }
//     }
//     return result
//  }

//  let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
// const newArr = function(arr){
//    return arr.myReduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
// }
// console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]



// function a (a,v,c,s){

// }

/**
 * 1.入参  最终的func  参数数量  参数 
 * 2. 刚进来 参数数量为 func 的参数数量
 * args 为 【】
 * 3. 定义装配函数
 *   —1.拿到执行的是参数数组 
 *     -2.将
 * 
 * 
 * 
 * 核心思想： 利用闭包，收集所有的参数，最后统一执行func逻辑
 * 这里的arity 只是为了 判断什么时候 收集完所有参数
 */
// function createCurry(func,arity,args){
//     var arity = arity || func.length
//     var args = args || []

//     var wapper = function (){
//         var _args = [].slice.call(arguments);
//         [].push.apply(args,_args)
//         if(_args.length < arity){
//             arity -= _args.length
//             createCurry(func,arity,args)
//         }
//         return func.apply(func,args)
//     }
//     return wapper
// }

// console.log(a.length)

// function add (){
//     var args = [].slice.call(arguments)


//     function adder (){
//         function _adder (){
//             args.push(...arguments)
//             console.log(args)
//             return _adder
//         }

//         _adder.toString = function (){
//             return args.reduce((pre,cur)=>pre + cur)
//         }

//         return _adder;
//     }

//     return adder(...args)
// }

// const a = add(1)(2,3)(4,5) + 0

// console.log(a)

// var x = {
//     toString: function () { return "foo"; },
//     valueOf: function () { return 42; }
// };
// // alert(x); 
// console.log("x=" + x) // "x=42"
// console.log("x=" - x) // "x=42"

// const arr = [
//     'yun',
//     'yun2',
//     'yun3',
//     'yun4',
//     'yun6',
// ]

// function mySort (a,b){
//     if( a.name === 'waring' && b.name !== 'waring' ){
//         return -1
//     }else if ( a.name !== 'waring' && b.name === 'waring' ){
//         return 1
//     }else {
//         return 0
//     }
// }
// console.log(arr.sort(mySort))
// console.log(arr.includes('yun1'))

/**
 * curry 
 * @param {function} func 完全体的func 
 * @param {number} arity  参数数量，用来控制什么时候跳出递归，执行func逻辑
 * @param {array} args 收集的参数数组，之后传给完全体func,执行 
 */
function createCurry(func, arity, args) {
    const args = args || []
    let arity = arity || func.length
    function wapper () {
        const _args = [].slice.call(arguments);
        [].push.apply(args,_args)
        if (_args.length < arity){
            arity -= _args.length
            createCurry(func,arity,args)
        }
        return func.apply(func,args)
    }
    return wapper
}

function compose (...args) {
    return args.reduceRight((pre,cur,i)=>{
        return cur[pre]
    })
}











