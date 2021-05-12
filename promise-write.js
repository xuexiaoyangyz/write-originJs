// const array = []
// array[3] = 6

// const map = array.map((e=>console.log(e)))

// console.log([].push(5))

// let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
// const newArr = function(arr){
//    return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
// }
// console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]

// // console.log('array',array)
// // console.log('map',map)

// // for (const e of array) {
// //   console.log(e)
// // }
// function mapByreduce (fn,context=null){
//   const arr = this
//   if(typeof fn !== 'function'){
//     throw new TypeError(fn + 'is not function')
//   }
//   const tmpArr = arr.reduce((pre,cur,index,thisvalue)=>{
//     let res = fn.call(context,cur,index,thisvalue)
//     return [...pre,res]
//   },[])
//   return tmpArr
// }

// let list = ['root','os_admin','monitor_admin'];

// const str = 'root'

// console.log(list.includes('1'))

// function curry(fn,...args){
//   return function (...args2){
//     let argsArr = [...args,...args2]
//     if(argsArr.length < fn.length){
//       return curry(fn,...argsArr)
//     }else{
//       return fn.call(this,...argsArr)
//     }
//   }
// }



// function curry (fn,...args){
//     return function (...args2){
//         const argsArr = [...args,...args2]
//         if(argsArr.length < fn.length){
//             return curry(fn,...argsArr)
//         }else{
//             return fn.apply(this,argsArr)
//         }
//     }
// }

// function map (fn,context){
//     const arr = this
//     const res = []
//     for (let index = 0; index < arr.length; index++) {
//         res.push(fn.call(context,arr[i],i,arr))
//     }
// }

function deepClone(value){
    const result = Array.isArray(value)?[]:{}

    for(let key in value){
        if(Object.prototype.hasOwnProperty.call(value,key)){
            if(typeof value[key] == 'object' && value[key] != null){
                result[key] = deepClone(value[key])
            }else{
                result[key] = value[key]
            }
        }
    }
    return result
}

const obj = {
    'arr':[{'inarr':23,'inarr2':34},{'ininarr':4}],
    'name':'xxy',
    'arr2':[1,2,3,4,5]
}
// const copyItem = deepClone(obj)
// console.log(copyItem);

function removeDup(value){
    const result = []
    const map = {}
    for(let i = 0;i < value.length;i++){
        const _value = value[i]
        if(!map[_value]){
            map[_value] = true
            result.push(_value)
        }
    }
    return result
}

// console.log(removeDup([1,1,2,3,4,5,5,5,6,7,888,7]))

function flatDeep(arr,deep){
    return arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)&&deep>0?flatDeep(cur,--deep):cur)
    },[])
}
function flatDeep2(arr,deep){
    return arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)&&deep>0?flatDeep(cur,--deep):cur)
    },[])
}
const arr = [[1,2,4,[7,8,9,[10,11,[89]]]],[4,5,6]]
// console.log(flatDeep(arr,1))

// let x1 = 2
// let y1 = ++ x1
// console.log(x1,y1)
function currying(fn , ...arg){
    const args = arg || []
    return function (...thisArgs){
        const _args = [...args,...thisArgs]
        if(fn.length > _args.length){
            return currying(fn,..._args)
        }else{
            return fn.call(this,..._args)
        }
    }
}

function add(a,b,c){
    return a + b + c
}

// console.log('add(1,2,3)',add(1,2,3));
//  // 6
// var curryingAdd = currying(add);
// console.log(curryingAdd(1)(2)(3))// 6

function sleep(time){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve()
        }, time * 1000);
    })
}

// promist.all  所有都成功 返回  只要有一个失败 返回
Promise.all = function (arr) {
    if(!Array.isArray(arr)){
        throw new TypeError('arr must be an array')
    }
    return new Promise((resolve,reject)=>{
        let resolvelength = 0
        const result = []
        for(let i = 0;i < arr.length ; i++){
           arr[i].then(res=>{
            resolvelength ++
            result.push(res)
            if( resolvelength === arr.length){
                return resolve(result)
            }
           }).catch(err=>{
               return reject(err)
           })
        }
    })
}

function foo(a,b,fn){
    const result = a + b
    // fn && fn()
    console.log(result)
}

function fn () {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve()
        }, 5000);
    }).then(res=>{
        console.log('zzz')
    })
}

function fooAsync (func,context){
    return (...args)=>{
        return new Promise((resolve,reject)=>{
            func.apply(context,[...args,[(err,res)=>{
                return err? reject(err): resolve(res)
            }]])
        })
    }
}

// const fnn = fooAsync(foo)

// fnn(4,6).then()
// foo(4,6,fn)

// var END = Math.pow(2, 53);
// var START = END - 100;
// var count = 0;
// for (var i = START; i <= END; i++) {
//     count++;
// }
// console.log(count);

var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})(); 
