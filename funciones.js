
// declarar una funcion
// function example(x, y = 0) {
//     if (isNaN(x) || isNaN(y)) {
//         throw new Error('El valor de ambos argumentos debe ser numerico')
//     }

//     console.log('soy la funcion ejemplo')
//     console.log('recibi el argumento x con valor ' + x)
//     console.log('recibi el argumento y con valor ' + y)
// }

// fat arrow
const arrow = (x) => console.log('recibi argumento ' + x)
arrow(56756)

// Funciones = Clase
let a = 'soy a'
function normal(x, x) {
    this.a = 'this a'
    console.log(a)
    console.log(this)
}

let instancia = new normal()
// let instanciaFlecha = new arrow()
console.log('esto es instancia', instancia)

let user = {
    firstName : "Ale",
    lastName : "Villa",
    fullName : () => `${this.firstName} ${this.lastName}`
}

let binded = normal.apply(this, {a:56})
console.log('apply', binded)





// ES6
const esNegativo = (x) => x < 0

const example = function () {
    console.log('example 1')
}

// Rest parameter
function sumar(...args) {
    console.log(args)
}

sumar(1,3,4,6,89)

// invocar la funcion
try {
    example(123, 'equis')
    example(123) // 123, 0
} catch (err) {
    console.error(err.message)
}
