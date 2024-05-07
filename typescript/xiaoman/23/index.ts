type Person = {
  name: string
  age: number
  text: string
}

const proxy = (object: any, key: any) => {
  return new Proxy(object, {
    get(target, prop, receiver) {
      console.log(`get key======>${key}`)
      return Reflect.get(target, prop, receiver)
    },

    set(target, prop, value, receiver) {
      console.log(`set key======>${key}`)

      return Reflect.set(target, prop, value, receiver)
    }
  })
}

const logAccess = (object: Person, key: 'name' | 'age' | 'text') => {
  return proxy(object, key)
}
// 使用泛型+keyof优化
// const logAccess = <T>(object: T, key: keyof T): T => {
//     return proxy(object, key)
//   }

let man: Person = logAccess(
  {
    name: 'xiaoman',
    age: 20,
    text: '2024'
  },
  'age'
)

man.age = 30

console.log(man)

// 案例简单实现一个mobx观察者模式
const list: Set<Function> = new Set()

const autorun = (cb: Function) => {
  if (cb) {
    list.add(cb)
  }
}

const observable = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      list.forEach((fn) => fn())
      console.log(list)
      return result
    }
  })
}

const person = observable({ name: '小满', attr: '威猛先生' })

autorun(() => {
  console.log('我变化了')
})

person.attr = '威猛个捶捶'
