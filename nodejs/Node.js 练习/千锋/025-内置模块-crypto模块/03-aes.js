const crypto = require("crypto");

function encrypt (key, iv, data) {
    let decipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    // decipher.setAutoPadding(true);
    return decipher.update(data, 'binary', 'hex') + decipher.final('hex');
}

function decrypt (key, iv, crypted) {
    crypted = Buffer.from(crypted, 'hex').toString('binary');
    let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    return decipher.update(crypted, 'binary', 'utf8') + decipher.final('utf8');
}

let key = "abcdef1234567890"
let  iv = "qwerty1234567890"

let data = "sail"

let cryted = encrypt(key, iv, data)
console.log("加密结果-",cryted)


console.log("解密结果-",decrypt(key, iv, cryted))
