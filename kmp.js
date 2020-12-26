const t = 'abcdjisacbabas'
const p = 'baba'

const bf = (t,p) => {
    let i = 0;
    let j = 0;
    while (i < t.length && j < p.length) {
        if (t[i] === p[j]){
            i ++;
            j ++;
        }else{
            i = i - j + 1;
            j = 0
        }
    }
    if (j = p.length - 1){
        return i - j
    }
    return -1
}

function getNext(p){

    const next = []
    
}