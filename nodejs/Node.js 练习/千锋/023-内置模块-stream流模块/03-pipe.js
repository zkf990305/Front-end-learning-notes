const fs = require('fs')

const readstream = fs.createReadStream('./output1.txt')
const writestream = fs.createWriteStream('./2.txt')

readstream.pipe(writestream)
