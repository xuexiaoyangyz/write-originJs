// 单例模式
// var person = function(){
//     let name = 'xxy'

//     return {
//         getName:function(){
//             return name
//         },
//         setName:function(value){
//             name = value
//         }
//     }
// }

// const personInstance = person()
// personInstance.setName('yyx')
// const personInstance2 = person()
// console.log(personInstance.getName())
// console.log(personInstance2.getName())


// // 工厂模式
// class Person{
//     constructor(name){
//         this.name = name
//     }
//     getName (){
//         return this.name
//     }
//     setName (value){
//         this.name = value
//     }
// }

// const person1 = new Person('xxy')
// console.log(person1.getName())
// person1.setName('123')
// console.log(person1.getName())

// const person2 = new Person('yyx')
// console.log(person2.getName())
// person1.setName()


var person = (function (){
    let name = 'xxy'
    let instanse = null

    function initInstanse(){
        return {
            getName : () => name,
            setName : (value) => {
                name = value
            }
        }
    }

    return {
        getInstanse: () => {
            if(!instanse){
                instanse = initInstanse()
            }
            return instanse
        }
    }
})()

const a = person.getInstanse()
const b = person.getInstanse()
console.log(a.getName());
a.setName('x')
console.log(b.getName());