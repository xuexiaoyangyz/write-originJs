
// tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230]


function tribonacci(signature,n){
    //your code here
    const map = signature
    if(n === 0){
        return arr
    }

    function fn(ceche,n){
        while (n > 0) {
            if(n === 4){
                const result = ceche[0] + ceche[1] + ceche[2]
                ceche[n-1] = result
                return result
            }
            if(n < 4){
                return ceche[n-1]
            }
            if(ceche[n-1]){
                return ceche[n-1]
            }
            const ret = fn(ceche,n-1) + fn(ceche,n-2) + fn(ceche,n-3)
            ceche[n-1] = ret
            return ret
        }
    }
    
    fn(map,n)
    return map.slice(0,n)

  }

//   function tribonacci(signature,n) {
//     const result = signature.slice(0, n);
//     while (result.length < n) {
//       result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
//     }
//     return result;
//   }

//   function tribonacci (signature,n){
//       const result = signature.slice(0,n)
//       while (result.lenght < n) {
//           result[result.lenght] = result.slice(-3).reduce((pre,cur)=>pre + cur,0)
//       }
//       return result
//   }

//   console.log(tribonacci([1,1,1],2))

XO("xxOo")

function XO(str){
    const str = str.toLowerCase();
    const arr = Array.from(str)
    const map = new Map()
    for(let a of arr){
        if(stack)
        stack.push(a)

    }
}