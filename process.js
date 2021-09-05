// fs = filesystem
const fs = require('fs')

// sync = try - catch

try {
    let content = fs.readFileSync('./data-type.js')
    // console.log( String(content) )
    // console.log( content.toString() )
    // console.log( '' + content )
    // console.log( `${content}` )
} catch (error) {
    console.log( error.message )
    return
}

console.log('hola')
