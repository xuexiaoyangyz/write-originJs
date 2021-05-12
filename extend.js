/**
 * 继承方式
 * 1.prototype继承   子类继承父类的实例 （在子类prototype中同时存在父类构造函数和原型链中的所有属性和方法）
 * 2.构造函数继承       子类构造函数中执行父类构造函数，改变this指向。（只将父类构造函数中的属性和方法继承到子类的构造函数中）
 * 3.组合继承    构造函数 + prototype继承    debuff: 1.子类的prototype中会存在父类的构造函数和原型上的所有属性和方法，如果此时子类想删除一个
 *                                                  父类构造函数上的属性，那么只删除子类实例上的属性达不到效果，必须练原型链上的属性也删掉。
 *                                                2.父类构造函数会执行两遍
 * 4.class extend继承    js原生继承的语法糖
 * 5.寄生继承           子类继承 一个对象 ，这个对象的__proto__指向父类的prototype
 * 6.寄生组合继承        构造函数 + 寄生继承   避开了组合继承的debuff
 */
// 构造函数继承   function Parent Child 本身就是构造函数
 function Parent(name,age){
    this.name = name
    this.age = age
    
 }
 Parent.prototype.getName = function (){
    return this.name
}

 function Child(name,age,sex){
    Parent.call(this,name,age)
    this.sex = sex
 }
const parent = new Parent('xxy',18);
const child = new Child('xxx',8,'男');
console.log(parent.name)
console.log(child)


 // 原型链+构造函数   组合继承
function A (name){
    this.name = name
}

A.prototype.getName = function () {return this.name}

function create(A,B){
    const tmp = new A()
    B.prototype = tmp
    B.constructor = B
}

function B (name,age){
    A.call(this,name)
    this.age = age
}

create(A,B)

const b = new B('xxy')
console.log(b)
// 寄生继承 + 构造函数   寄生组合继承
function A (name){
    this.name = name
}

A.prototype.getName = function () {return this.name}

function create(A,B){
    const tmp = {}
    tmp.__proto__ = A.prototype
    B.prototype = tmp
    B.constructor = B
}

function B (name,age){
    A.call(this,name)
    this.age = age
}

create(A,B)

const b = new B('xxy')
console.log(b.getName())

// 进阶版 要继承的__proto__指向父类的实例 
function create(proto,options){
    const tmp = {}
    tmp.__proto__ = proto
    Object.defineProperties(tmp,options)
    return tmp
}

 function B (name,age,sex){
     this.name = name
     this.age = age
     this.sex = sex
    }

Child.prototype = create(Parent.prototype,{
     constructor:{
         value: Child
     },
     getSex:{
         value: function(){
            return this.sex
         }
     }
 })

 const b = new Child('xxxx',199,'nb')
 console.log(b.getSex())

