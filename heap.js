/**
 * 二叉堆 是一颗完全二叉树   除了最后一层 每一个节点都是完整的（拥有左右两个子节点）
 * 分为最大堆和最小堆
 * 最大堆->大顶堆   父节点的键值一定大于等于任何一个子节点。根节点的键值一定是最大的一个
 * 最小堆->小顶堆   父节点的键值一定小于等于任何一个子节点。根节点的键值一定是最小的一个
 * 常规操作： 插入节点  删除节点  构建二叉堆
 * 插入节点： 插入只能插入最后一个位置，然后和他的父节点进行比较,递归的置换到他应该在的位置  （上浮）
 * 删除节点： 只会删除位于堆顶的元素， 然后将最后一个元素放到堆顶，找到他子节点中最小的进行比较，递归置换到他应该在的位置 （下浮）
 * 构建二叉堆： 是一个排序的过程
 * 如果有数组表示完全二叉树的话，父节点索引为k，他的左子节点为2k+1,右子节点为2k+2
 */

class BinaryHeap {
    constructor(compare,array){
        this.compare = compare;
        if(array){
            this.size = array.length
            this.heap = array
            this.buildHeap()
        }else{
            this.size = 0
            this.heap = []
        }
    }



    // 通过子节点下标，找父节点坐标
    parentIndex(i){
        return Math.floor((i - 1) / 2)
    }

    // 通过子节点下标，找父节点值
    getParent(i){
        return this.heap[this.parentIndex(i)]
    }

    // 通过父节点下标，查找左子节点下标
    leftIndex(k){
        return 2 * k + 1
    }

    // 通过父节点下标，查找左子节点值
    getLeft(k){
        return this.heap[this.leftIndex(k)]
    }

    // 通过父节点下标，查找右子节点下标
    rightIndex(k){
        return 2 * k + 2
    }

    // 通过父节点下标，查找右子节点值
    getRight(k){
        return this.heap[this.rightIndex(k)]
    }

    // 根据两个坐标进行交换
    swap(a,b){
        const tmp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = tmp
    }

    // 插入节点
    push(node){
        if(this.size === 0){
            this.size ++
            this.heap[0] = node
            return
        }
        this.size ++
        let i = this.size - 1
        this.heap[i] = node

        while( i!==0 && this.compare(this.heap[i],this.getParent(i))){
            this.swap(i,this.parentIndex(i))
            i = this.parentIndex(i)
        }
    }

    // 将i节点重新排序
    heapify(i){
        // 递归结束条件 i === this.size-1  说明i已经在最底层，没有下一层级了。
        if (i === (this.size -1)) return
        
        let l = this.leftIndex(i)
        let r = this.rightIndex(i)

        // 比较过程，分为三步 先将自己变为最小，然后那左节点和最小比，如果left更小，最小变为left 在拿最小和right比，如果right更小,则把最小变为right
        let tmp = i
        if ( i < this.size && this.compare(this.heap[l],this.heap[i]))
            tmp = l
        if ( i < this.size && this.compare(this.heap[r],this.heap[tmp]))
            tmp = r
        // 比较结束 得到了最小的下标
        // 如果最小的不是i 则证明他需要移动
        if(tmp != i){
            this.swap(i,tmp)
            this.heapify(tmp)
        }
    }

    // 删除堆顶元素
    pop(){
        if ( this.size == 0 ) {
            return
        }
        if ( this.size == 1){
            const root = this.top()
            this.size --
            this.heap.length = this.size
            return root
        }

        const root = this.top()
        this.heap[0] = this.heap[ this.size -1 ]
        this.size --
        this.heap.length = this.size
        this.heapify(0)
        return root
    }

    top(){
        return this.heap[0]
    }



    // 构建堆
    buildHeap(){
        // 从最后一个有子节点的节点开始排序，排到最上层（i===0）
        for(let i = Math.floor(this.size/2)-1;i>=0;i--){
            this.heapify(i)
        }
    }
    
}

function compare(a,b){
    return a < b
}

let heap = new BinaryHeap(compare)
heap.push(1)
heap.push(2)
heap.push(3)
heap.push(4)
heap.push(5)
console.log(heap.heap)
var v = heap.pop()
console.log(v)

var array = [150,80,40,30,10,70,110,100,20,90,60,50,120,140,130]
var h = new BinaryHeap(compare,array)
console.log(h.heap)

const arr = [1]
var a = arr.pop()
console.log(a)


