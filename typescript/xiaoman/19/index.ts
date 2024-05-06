// 对象混入
interface Name {
  name: string
}
interface Age {
  age: number
}

interface Email {
  email: string
}

let person1: Name = {
  name: 'xiaoman'
}
let person2: Age = {
  age: 18
}
let person3: Email = {
  email: 'xiaoman@xxx.com'
}

const person = Object.assign(person1, person2, person3)
console.log(person)

// 类的混入
class A {
  type: boolean = false
  changeType() {
    this.type = !this.type
  }
}

class B {
  name: string = '张三'
  getName(): string {
    return this.name
  }
}

class C implements A, B {
  type: boolean
  changeType: () => void
  name: string
  getName: () => string
}
console.log(A, B, C)
Mixins(C, [A, B])
function Mixins(curCls: any, itemCls: any[]) {
  itemCls.forEach((item) => {
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      curCls.prototype[name] = item.prototype[name]
    })
  })
}
