let fs = require('fs')
let users = require('./users.json')
// console.log(users)

// console.log(fs)

// Node JS puede leer archivos .js y .json

// leo el archivo como un buffer
let content = fs.readFileSync('./users.json')

// let string = content.toString()

// let json = JSON.parse(string)

// console.log(json[0].nombre)