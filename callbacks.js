
// map - devolver la misma cantidad
// filter - devuelve la misma cantidad, o menos o nada
// reduce
// forEach

// aplican sobre arrays
// retornan un nuevo array (map, filter)
// retorna un dato de cualquier tipo
// retorna undefined

function filtrar(fn) {
    let numeros = [-1,-2,-3,0,1,2,3,4,5,6,7,8]

    let resultado = []

    for (let i = 0; i < numeros.length; i++) {
        if ( fn(numeros[i]) ) {
            resultado.push(numeros[i])
        } 
    }

    return resultado
}

let pares = function (n) {
    return n % 2 == 0
}

let positivos = function (n) {
    return n >= 0
}

console.log( filtrar(pares) )
console.log( filtrar(positivos) )

let array = ['a', 'b', 'c', 'd', 'e', 'f']

let final = array.filter(function (l) {
    return l > 'b'
}).map(function (l) {
    return l.toUpperCase()
}).reduce(function (anterior, actual) {
    return anterior + actual
})

console.log(final)