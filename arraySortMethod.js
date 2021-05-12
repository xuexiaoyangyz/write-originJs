/**
 * 快速排序   时间复杂度 O(n log n)  不稳定
 * 1.找到一个哨兵 （可以取中间值）
 * 2.将比哨兵大的放在右边，将比哨兵小的放在左边
 * 3.在左右两个子集中 重复1.2步骤 直到所有子集只剩下一个元素为止
 * 
 */


const arr = [1,43,54,67,121,32,45,12,32,86,96,543,321,23,2,45]
debugger
const quickSort = (arr) => {
    if(arr.length <= 1) return arr
    const sentryIndex = Math.ceil(arr.length / 2)
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {function Foo(){
        function getname(){
          console.log(4);
        }
      }
      Foo.prototype.getname=function(){
        console.log(3);
      }
      function Foo2(){
        Foo2.getname=function(){
          console.log(2);
        }
      }
      Foo2.prototype= Foo.prototype;
      let obj=new Foo2()
      obj.getname()
        if (i === sentryIndex) continue 
        if(arr[i] >= arr[sentryIndex]){
            right.push(arr[i])
        }else if (arr[i] < arr[sentryIndex]){
            left.push(arr[i])
        }
    }
    // console.log(arr[sentryIndex])
   return quickSort(left).concat([arr[sentryIndex]],quickSort(right))
}
// console.log(quickSort(arr))

/**
 * 冒泡排序 O(n^2) 稳定
 *  1.两层for循环
 *  2.第一层for循环，为了拿到每一个要比较的值
 *  3.第二层for循环，拿到这个值，和后面的值，挨个进行比较，将最大的上浮到最后
 */
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i ; j++) {
            if(arr[j-1] > arr[j] ){
                [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
            }
        }
    }
    return arr
}

// console.log(bubbleSort(arr))

/**
 * 插入排序 O(n^2) 稳定
 * 1.拿到新的数，从大到小比较，给他插入到自己的位置，保证前面的数是已经排好序的
 * 2.第一层for,找到那个要插入的数
 * 3.第二层for,遍历tmpArr,从大到小找到能插入的位置。如果都遍历完tmpArr还没找到合适的位置，就插入到尾部
 */
function insertSort(arr){
    // 循环每一个数
    let tmpArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i]
        for (let j = tmpArr.length - 1; j >= 0; j--) {
            if(tmpArr[j] < current){
                 tmpArr.splice(j + 1,0,current)
                 flag = 1
                 break
            }
            if(j === 0) {
                tmpArr.push(current)
            }
        }
    }
    return tmpArr
}

// console.log(insertSort(arr))
/**
 * 插入排序(不开新空间) O(n^2) 稳定
 * 1. 还是两层for循环
 * 2. 第一层for,还是找到要插入的元素
 * 3. 第二层for,拿到要插入的元素和前面的元素比较，(从最近的开始比，如果小于他，就和他调换位置，不然不变)
 */

function insertSortA(arr){
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if( arr[j] < arr[j - 1]){
                [arr[j -1 ],arr[j]] = [arr[j],arr[j-1]]
            }
        }
    }
    return arr
}
console.log(insertSortA(arr))