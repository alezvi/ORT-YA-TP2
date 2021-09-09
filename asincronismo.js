// let fs = require('fs')

// fs.readFile('./error.log', function (err, data) {
//     console.log(err)
// })

// Promise
// 3 estados: pending, fullfilled, rejected

function sincronica() {
    return 1
}


async function quitarAsync() {
    let esperar = await asincronica(7)
    // ...
    return esperar
}

quitarAsync()

let arrowAsync = async () => {}


asincronica(6)
.catch(function (err) { 
    console.log(err.message)
})

// Asynchronous Javascript And XML



fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    if (response.status >= 400) {
        throw new Error('la peticion fallo')
    }

    return response.json()
})
.then(json => console.log(json))

// 2XX, 3XX > ok
// 4xx, 5xx > err


async function asincronica(n) {
    if (isNaN(n)) {
        throw new Error('el argumento debe ser numerico')
    }

    return 1
}

function fetch (n) {
    return new Promise((resolve, reject) => {
        if (isNaN(n)) {
            reject('...')
        }

        resolve(1)
    })
}

