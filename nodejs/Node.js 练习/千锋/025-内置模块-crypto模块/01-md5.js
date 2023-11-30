const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('hello')
hash.update('nodejs')

console.log(hash.digest('hex'))
