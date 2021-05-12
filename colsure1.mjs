
const ismount = true
let hook = {
    momeiszedState:1,
    queue:null,
    next:null,
}

function dispatch(hook,action){
    hook.momeiszedState = action(hook.momeiszedState)
}


export function create(){
    return [hook.momeiszedState,dispatch.bind(null,hook)]
}

let num = 10;
function changeNum (){
    num = 20
}

export default num;
export {num,changeNum}

