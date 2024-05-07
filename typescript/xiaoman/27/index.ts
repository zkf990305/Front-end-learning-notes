// 1.提取头部元素
type Arr = ['a', 'b', 'c']

type First<T extends any[]> = T extends [infer First, ...any[]] ? First : []

type a = First<Arr>

// 2.提取尾部元素

type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : []

type c = Last<Arr>

// 3.剔除第一个元素 Shift

type Shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : []

type a1 = Shift<Arr>

// 4.剔除尾部元素 pop
type Pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : []
type c2 = Pop<Arr>
