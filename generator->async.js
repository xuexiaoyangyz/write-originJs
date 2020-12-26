/**
 * generator 与 async/await 的区别
 * 1.async函数自带
 * 
 */



function readFile(text){
    return await(3000,text)
}

function await(timer,text){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(text)
        }, timer);
    })
}
/**
 * 1.执行next的时候 会在碰到第一个yield的时候停住，并执行之后的逻辑
 * 2. next()的返回值，就是之后逻辑的返回值
 * 3. next()的参数 为 yield 返回值赋给 前面变量的值
 */
// function *  gen () {
//     yield '111'
//     console.log('a',yield '333')
//     var b = yield '222'
//     console.log('b',b)
// }

// const g = gen()
// var res1 = g.next('iii')
// console.log('res1',res1)
// var res2 = g.next('ooo')
// console.log('res2',res2)
// var res3 = g.next('www')
// console.log('res3',res3)

function *  gen () {
    var a = yield readFile('file1')
    console.log('a',a)
    var b = yield readFile('file2')
    console.log('b',b)
}

function asyncFun (){
    return spawn(gen)
}

asyncFun()
/**
 * async的co实现
 * 
 * @param {genterator} genF 
 * 传入的是一个genterator方法，高阶函数，赋予genterator自动执行的能力
 * 该函数返回一个promise ->只是为了 async函数返回一个promise对象，用resolve来进行跳出迭代。
 * 调用generator函数得到一个interator对象
 * step函数接受 gen.next()方法 进行每次调用 ->用try catch包裹，如果报错则 reject
 * 递归终止条件为 generator对象所有next() 执行完毕
 * next = nextF() 其实已经在执行yeild后面的内容，如果是异步的话，next的value会是一个promise对象。
 * 等待这个promise对象resolve 或者 reject  然后调用下一次的 next().
 * Promise.resolve 可以接收一个还没有resolve的promise对象，当他resolve后执行.then的逻辑
 * 
 */

 function spawn(genF){
    return new Promise((resolve,reject)=>{
        let gen = genF() // 只创建一个iterator对象
        function step (func){
            let next 
            try {
                next = func()
            } catch (error) {
                reject(error)
            }
            if(next.done){
                resolve(next.value)
            }
            Promise.resolve(next.value).then((v)=>{

                step(()=>gen.next(v))
            },
            (e)=>{

                step(()=>gen.throw(e))
            })
        }

        step(()=>gen.next(undefined))
    })
 }
