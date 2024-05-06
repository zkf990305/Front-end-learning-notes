// 声明文件 declare
import axios from 'axios'
import express from 'express'

const app = express()
const router = express.Router()
app.use('/api', router)

router.get('/api', (req: any, res: any) => {
  res.send('hello world')
})

app.listen(9001, () => {
  console.log('9001 hello world')
})
