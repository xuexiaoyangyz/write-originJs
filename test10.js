/**
 * 大数相加
 * 1. 转成数组，相加
 * 2. 截取15位，分治想加
 */

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * 
 */
function maxAdd(a,b){
    a = '0' + a
    b = '0' + b
    let carry = 0
    const arrA = a.split(''),
          arrB = b.split(''),
          result = [],
          lenA = a.length,
          lenB = b.length,
          distance = lenA - lenB,
          len = distance > 0 ? lenA : lenB
    // 给小的那个数组补0
    if(distance > 0){
        for (let i = 0; i < distance; i++) {
            arrB.unshift('0')          
        }
    }else if(distance < 0){
        for (let i = 0; i > distance; i--) {
            arrA.unshift('0')
        }
    }
    console.log('arrA',arrA)
    console.log('arrB',arrB)
    for (let i = len - 1; i >= 0; i--) {
        let tmp = Number(arrA[i] + arrB[i]) + carry
        if(tmp >= 10){
            result.unshift((tmp + '')[1])
            carry = 1
        }else {
            result.unshift(tmp)
            carry = 0
        }

    }
    console.log(result)

}

maxAdd('2222','33333')