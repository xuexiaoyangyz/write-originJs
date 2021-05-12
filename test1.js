// hook和类组件区别，解决了设么问题 ，装饰器原理
// 1.组件逻辑复用，2.复杂组件逻辑混乱，每个生命周期充斥着不相关的代码
// constrctor 里有异步方法
// 中间件实现原理，就是在本身函数的前面和后面增加逻辑
// 传入一个函数，返回一个函数
function compose (...fn){
    return function(){
        return fn.reduce((fn,arg)=>{
            fn(arg)
        })
    }

}

let a = '3'
for(let i = 0;i<=3;i++){
    console.log('i',i)
    switch (i) {
        case 1:
            console.log('333')
            if(a=='3'){
                console.log('332')
                continue;
            }
            console.log(2)
            return 2
            console.log(3)
            break;
            case 2:
                console.log('444')
                if(a=='3'){
                    console.log('442')
                    return;
                }
                console.log(2)
                return 2
                console.log(3)
                break;
        default:
            break;
    }
}

