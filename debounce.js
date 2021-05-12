/**
 * 防抖和节流不是js所特有的，对函数在持续调用时进行不同控制的两个概念
 * 防抖 在触发函数调用的一段时间内没有再次触发，就执行该函数
 * 应用场景： 1.输入框内容联想
 *          2.window.resize 避免ui渲染阻塞，浏览器卡顿
 *          3.表单提交，防止重复操作
 * 实现思路：利用setTimeout的延时执行，如果在这之前事件再次触发，则清空计时器，重新计时
 */

// version 0.1
function debounce(func,time){
    let timerId = null;
    return function (...args){
        if (timerId) clearTimeout(timeId)
        timeId = setTimeout(() => {
            func.call(this,args)
        }, time);
    }
}

function debounce1(func,time){
    let timeId = null
    return function(...arg){
        if(timeId) clearTimeout(timeId)
        func.apply(this,arg)
    }
}

// version 1.0
function debounce(func,time){
    let timerId = null;
    let leadingTimerId = null;
    return function (...args){
        
        if (timerId) {
            clearTimeout(timeId)
            clearTimeout(leadingTimerId)
            timeId = setTimeout(() => {
                func.call(this,args)
                leadingTimerId = setTimeout(() => {
                    timerId = null
                }, time);
            }, time);
        } else {
            // 如果第一次点击之后立即执行，不启动settimeout
            func.call(this,args)
            timerId = -1  
        }
    }
}
function test(...arg){
    console.log(arg)
}

test(1,2,3)