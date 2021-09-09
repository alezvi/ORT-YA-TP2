let numeros = [-1,-2,-3,0,1,2,3,4,5,6,7,8]

// el map devuelve un array con la misma cantidad de elementos
let map = numeros.map(n => n * 2)

// el filter devuelve un array con nada/menos/igual cantidad
let filter = numeros.filter(n => n < 0)

// el forEach no devuelve nada (undefined)
let x = 'argumento'

function ejemploParaLaura(array, x = 'default') {
    array.forEach(n => {
        console.log(x, n)
    })
}

// ejemploParaLaura(numeros)

// reduce - devuelve un dato
let user = {
    firstName : "",
    lastName : "",
    address : {
        countryCode : "",
        zipCode: "",
    }
}

let primero = {
    firstName: "",
    lastName: ""
}

let segundo = {
    countryCode : "",
    zipCode: "",
}

let datos = [primero, segundo]

// primer parametro: acumulador / dato previo
// segundo parametro: dato actual de la iteracion
let resultado = datos.reduce(function(a, b) {
    console.log('el anterior', a)
    console.log('el actual', b)
    // lo que retorno
    // es el acumulativo en la siguiente iteracion
    return {...a, ...b}
}, {})

// console.log(resultado)

// find = solamente un dato o undefined
let find = numeros.find(function (n) {
    return n % 2 != 0
})


let r = numeros.filter(n => n > -1).map(n => n * 2)

console.log(r)