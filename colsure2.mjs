import {create} from './colsure1.mjs';
import defaultNum,{num,changeNum} from './colsure1.mjs';

// function app () {
//     const [num,setNum] = create(4)
//     console.log(num)
//     setNum(()=>num+1)
//     console.log(num)

// }

// app()
// app()

console.log('defaultNum',defaultNum)
console.log('num',num)
changeNum()
// defaultNum = defaultNum + 1
console.log('num',num)
console.log('defaultNum',defaultNum)