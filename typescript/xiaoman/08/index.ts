// 定义类

// 定义变量
class Person {
  name: string
  age: number = 0

  constructor(name: string, age: number) {
    console.log('Person:')
    this.name = name
    this.age = age
  }
  run() {}
}

let person = new Person('TypeScript', 11)
console.log(person.name, person.age)

// 类的修饰符

class Person1 {
  public name: string
  private age: number = 0
  protected some: any

  constructor(name: string, age: number, some: any) {
    console.log('Person1:')
    this.name = name
    this.age = age
    this.some = some
  }
  run() {}
}

class Man1 extends Person1 {
  constructor() {
    super('张三', 18, 2)

    console.log(this.some)
  }
  create() {
    console.log(this.some)
  }
}

// let person1 = new Person1('TypeScript', 12, 1)
// console.log(person1.name, person1.age, person1.some)
let man1 = new Man1()
man1.create()

// 静态属性和静态方法
class Person2 {
  public name: string
  private age: number = 0
  protected some: any
  static nb: string = '123'
  constructor(name: string, age: number, some: any) {
    console.log('Person2:')
    this.name = name
    this.age = age
    this.some = some
  }
  static run() {
    return this.aaa()
  }
  static aaa() {
    return console.log('aaaaaaaa')
  }
}

console.log(Person2.nb)
Person2.run()

// interface 定义类

interface PersonClass3 {
  get(type: boolean): boolean
}

interface PersonClass4 {
  set(): void
  asd: string
}

class A {
  name: string
  constructor() {
    this.name = '123'
  }
}

class Person3 extends A implements PersonClass3, PersonClass4 {
  get(type: boolean): boolean {
    return type
  }
  set() {
    console.log('set')
  }
  asd: string
  constructor() {
    super()
    this.asd = '456'
  }
}

let person3 = new Person3()
console.log(person3)

// 抽象类
// abstract class B {
//   public name: string
// }
// new B()
abstract class A1 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  print(): string {
    return this.name
  }

  abstract getName(): string
}

class B1 extends A1 {
  constructor() {
    super('xiaoman')
  }
  getName(): string {
    return this.name
  }
}

let b1 = new B1()

console.log(b1.getName())
console.log(b1.print())
