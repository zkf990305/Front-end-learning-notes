// 测试用例
interface Item {
  age: number
  name: string
}

const array: Array<Item> = [
  { age: 123, name: '1' },
  { age: 123, name: '2' },
  { age: 123, name: '3' }
]

type mapTypes = string | number
const map: Map<mapTypes, mapTypes> = new Map()

map.set('1', '王爷')
map.set('2', '陆北')

for (let value of map) {
  console.log(value)
}

let set: Set<number> = new Set([1, 2, 3, 4, 5, 6])
// let it:Iterator<Item> = array[Symbol.iterator]()
const gen = (erg: any): void => {
  let it: Iterator<any> = erg[Symbol.iterator]()
  let next: any = { done: false }
  while (!next.done) {
    next = it.next()
    if (!next.done) {
      console.log(next.value)
    }
  }
}
gen(array)

const objForOf = {
  max: 5,
  current: 0,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        if (this.current == this.max) {
          return {
            value: undefined,
            done: true
          }
        } else {
          return {
            value: this.current++,
            done: false
          }
        }
      }
    }
  }
}
console.log([...objForOf])

for (let val of objForOf) {
  console.log(val)
}
