// 装饰器
const watcher: ClassDecorator = (target: Function) => {
  target.prototype.getParams = <T>(params: T): T => {
    return params
  }
}
@watcher
class A {
  constructor() {}
}
const a = new A()
console.log((a as any).getParams('123'))

// 装饰器工厂
const watcher1 = (name: string): ClassDecorator => {
  return (target: Function) => {
    target.prototype.getParams = <T>(params: T): T => {
      return params
    }
    target.prototype.getOptions = (): string => {
      return name
    }
  }
}

@watcher1('name')
class A1 {
  constructor() {}
}

const a1 = new A1()
console.log((a1 as any).getParams('123'))

// 装饰器组合
const watcher2 = (name: string): ClassDecorator => {
  return (target: Function) => {
    target.prototype.getParams = <T>(params: T): T => {
      return params
    }
    target.prototype.getOptions = (): string => {
      return name
    }
  }
}
const watcher3 = (name: string): ClassDecorator => {
  return (target: Function) => {
    target.prototype.getNames = (): string => {
      return name
    }
  }
}

@watcher3('name2')
@watcher2('name')
class A2 {
  constructor() {}
}

const a2 = new A2()
console.log((a2 as any).getOptions())
console.log((a2 as any).getNames())

// 方法装饰器
const met: MethodDecorator = (...args) => {
  console.log(args)
}

class A3 {
  constructor() {}
  @met
  getName(): string {
    return 'xiaoman'
  }
}

const a3 = new A3()
console.log(a3.getName())

// 属性装饰器
const met1: PropertyDecorator = (...args) => {
  console.log(args)
}

class A4 {
  @met1
  name: string
  constructor() {
    this.name = 'xiaoman'
  }
}

const a4 = new A4()
console.log(a4)

// 参数装饰器
const met2: ParameterDecorator = (...args) => {
  console.log(args)
}

class A5 {
  constructor() {}
  setParasm(@met2 name: string = '213') {}
}

const a5 = new A5()
console.log(a5)

//1.类装饰器 ClassDecorator
//2.属性装饰器 PropertyDecorator
//3.参数装饰器 ParameterDecorator
//4.方法装饰器 MethodDecorator PropertyDescriptor 'https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10'
//5.装饰器工厂
import axios from 'axios'
import 'reflect-metadata'
const Base = (base: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.base = base
  }
  return fn
}

const Get = (url: string) => {
  const fn: MethodDecorator = (
    target: any,
    key,
    descriptor: PropertyDescriptor
  ) => {
    axios.get(url).then((res) => {
      const key = Reflect.getMetadata('key', target)
      descriptor.value(key ? res.data[key] : res.data)
    })
  }
  return fn
}

const result = () => {
  const fn: ParameterDecorator = (target: any, key, index) => {
    Reflect.defineMetadata('key', 'result', target)
  }
  return fn
}

const Bt: PropertyDecorator = (target, key) => {
  console.log(target, key)
}

@Base('/api')
class Http {
  @Bt
  xiaoman: string
  constructor() {
    this.xiaoman = 'xiaoman'
  }
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(@result() data: any) {
    // console.log(data)
  }
  // @Post('/aaaa')
  create() {}
}

const http = new Http() as any

// console.log(http.base)
