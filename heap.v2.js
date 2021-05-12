class BinaryHeapV2 {
    constructor(array,compare){
        this.compare = compare
        if(array){
            this.size = array.length
            this.heap = array
            this.createHeap()
        }else{
            this.size = 0
            this.heap = []
        }

    }

    createHeap(){
        for (let i = Math.floor(this.size / 2) -1; i >= 0 ; i--) {
            //得到每一个非叶子节点
            this.heapify(i)
        }
    }
    push(value){
        // 将新值加到最后，然后递归上浮
        if(this.size == 0){
            this.heap[0] = value
            this.size = 1
            return
        }
        this.size ++
        let i = this.size - 1
        this.heap[i] = value
        
        while (i!=0 && this.compare(this.heap[i],this.getParent(i))) {
            this.swap(i,this.getParentIndex(i))
            i = this.getParentIndex(i)
        }

        
    }
    pop(){
        // 将第一个删除，将最后一个放到第一个，下沉到应该到的位置
        if(this.size === 0 || this.size === 1 ){
            this.size = 0
            this.heap = []
            return
        }
        this.size --
        // this.heap[0] = 
    }

    top(){
        return this.heap[0]
    }

    getParentIndex(i){
        return Math.floor((i - 1) / 2)
    }

    getParent(i){
        return this.heap[getParentIndex(i)]
    }

    heapify(i){
        // 拿到左右子节点
        const l = this.getLeftIndex(i)
        const r = this.getRightIndex(i)

        let tmp = i
        // i 先和 l 比  i > l return true
        if(l && this.compare(this.heap[l],this.heap[i])){
            tmp = l
        }
        if(r && this.compare(this.heap[r],this.heap[tmp])){
            tmp = r
        }

        if( tmp != i){
            this.swap(i,tmp)
            this.heapify(tmp)
        }

    }

    swap(a,b){
        [this.heap[a],this.heap[b]] = [this.heap[b],this.heap[a]]
    }
    getLeftIndex(i){
        const len = 2 * i + 1 
        return len > this.size ? null : len
    }
    getRightIndex(i){
        const len = 2 * i + 2
        return len > this.size ? null : len
    }
}

const arr = [3,4,7,12,42,54,67,23,2,45,3,5]

const newarr = new BinaryHeapV2(arr,(a,b)=>a>b)
console.log(newarr)