let fs = require('fs')

let args = process.argv.slice(2)
let date = new Date
let ymd = `${date.getFullYear()} ${date.getMonth()+1} ${date.getDate()}`

fs.appendFileSync('./error.log', `--- --- ---\nFecha: ${ymd} - Parametros: ${args}`)
