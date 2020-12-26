const str = 'abababx';

const match =(str) => {
    let state = start;
    for (let a of str){
        debugger
        state = state(a)
    }
    return state === end
}

function start(e) {
    if (e === 'a'){
        return fundA
    }else {
        return start
    }
}

function end(e){
    return end
}

function fundA(e){
    if (e === 'b'){
        return fundB
    }else {
        return start(e)
    }
}

function fundB(e){
    if (e === 'a'){
        return fundA2
    }else {
        return start(e)
    }
}

function fundA2(e){
    if (e === 'b'){
        return fundB2
    }else {
        return fundA(e)
    }
}

function fundB2(e){
    if (e === 'a'){
        return fundA3
    }else {
        return fundB(e)
    }
}

function fundA3(e){
    if (e === 'b'){
        return fundB3
    }else {
        return fundA2(e)
    }
}

function fundB3(e){
    if (e === 'x'){
        return end
    }else {
        return fundA3(e)
    }
}

console.log(match('3sababababababx'))






