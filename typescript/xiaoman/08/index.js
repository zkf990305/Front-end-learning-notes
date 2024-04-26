"use strict";
// 定义类
// 定义变量
class Person {
    constructor(name, age) {
        this.age = 0;
        console.log('Person:');
        this.name = name;
        this.age = age;
    }
    run() { }
}
let person = new Person('TypeScript', 11);
console.log(person.name, person.age);
// 类的修饰符
class Person1 {
    constructor(name, age, some) {
        this.age = 0;
        console.log('Person1:');
        this.name = name;
        this.age = age;
        this.some = some;
    }
    run() { }
}
class Man1 extends Person1 {
    constructor() {
        super('张三', 18, 2);
        console.log(this.some);
    }
    create() {
        console.log(this.some);
    }
}
// let person1 = new Person1('TypeScript', 12, 1)
// console.log(person1.name, person1.age, person1.some)
let man1 = new Man1();
man1.create();
// 静态属性和静态方法
class Person2 {
    constructor(name, age, some) {
        this.age = 0;
        console.log('Person2:');
        this.name = name;
        this.age = age;
        this.some = some;
    }
    static run() {
        return this.aaa();
    }
    static aaa() {
        return console.log('aaaaaaaa');
    }
}
Person2.nb = '123';
console.log(Person2.nb);
Person2.run();
class A {
    constructor() {
        this.name = '123';
    }
}
class Person3 extends A {
    constructor() {
        super();
        this.asd = '456';
    }
    get(type) {
        return type;
    }
    set() {
        console.log('set');
    }
}
let person3 = new Person3();
console.log(person3);
// 抽象类
// abstract class B {
//   public name: string
// }
// new B()
class A1 {
    constructor(name) {
        this.name = name;
    }
    print() {
        return this.name;
    }
}
class B1 extends A1 {
    constructor() {
        super('xiaoman');
    }
    getName() {
        return this.name;
    }
}
let b1 = new B1();
console.log(b1.getName());
console.log(b1.print());
