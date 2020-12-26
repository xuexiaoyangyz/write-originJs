class Stack {
    constructor(){
        // 用数组实现stack
        this.item = []
    }

    pop(){
        this.item.pop()
    }

    push(node){
        this.item.push(node)
    }

    peek(){
        this.item[this.item.length - 1]
    }

    clear(){
        this.item = []
    }

    isEmpty(){
        return this.item.length === 0
    }

}