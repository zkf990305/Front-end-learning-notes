// ECMAScript 的内置对象
// let b: Boolean = new Boolean(1)
// console.log(b)
// let n: Number = new Number(true)
// console.log(n)
// let s: String = new String('哔哩哔哩')
// console.log(s)
// let d: Date = new Date()
// console.log(d)
// let r: RegExp = new RegExp('/w/')
// console.log(r)
// let xhr: XMLHttpRequest = new XMLHttpRequest()
// console.log(xhr)
// let e: Error = new Error('错了！')
// console.log(e)

// HTML(元素名称)Element    HTMLElement     Element
// let div: NodeListOf<HTMLDivElement | HTMLElement> =
//   document.querySelectorAll('div')

// let local: Storage = localStorage
// local.setItem
// let lo: Location = location
// let promise: Promise<string> = new Promise((r) => r('123'))
// let cookie: string = document.cookie
// promise.then((res) => {
//   res.charAt(0)
// })

let canvas: HTMLCanvasElement = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

canvas.width = screen.availWidth // 可视区域的宽度
canvas.height = screen.availHeight //可视区域的高度

let str: string[] = 'QWERTYUIOPLKJHGFDSAZXCVBNM'.split('')
let Arr = Array(Math.ceil(canvas.width / 10)).fill(0) //获取宽度例如1920 / 10 192
console.log(Arr)

const rain = () => {
  ctx.fillStyle = 'rgba(0,0,0,0.05)' //填充背景颜色
  ctx.fillRect(0, 0, canvas.width, canvas.height) // 背景
  ctx.fillStyle = '#0f0' // 文字颜色
  Arr.forEach((item, index) => {
    ctx?.fillText(
      str[Math.floor(Math.random() * str.length)],
      index * 10,
      item + 10
    )
    Arr[index] =
      item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10 //添加随机数让字符随机出现不至于那么平整
  })
}

setInterval(rain, 40)
