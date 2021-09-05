let fs = require('fs')

let users = [
    {nombre : '...'},
    {nombre : 'ezequiel'},
]

let json = JSON.stringify(users)

fs.writeFileSync('./users.json', json)
