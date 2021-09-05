let actor = {
    name : "Joey",
    firstName : "",
    first_name : "",
    "last-name" : "Tribbiani",
    "1ero" : ""
}

let prop = 'name'

// console.log(actor.name) 
// console.log(actor[prop]) 
// console.log(actor['last-name']);

// Array
// 0, 1, 2, 3, 4, 5

let dias = []

dias[0] = "Sunday"
dias[1] = "Lunes"
dias[2] = "Martes"

dias.push('Miercoles', 'Jueves', 'Viernes', 'Sabado')

for (let i = 0; i < dias.length; i++) {
    // console.log( dias[i] )
}

for (let prop of dias) {
    console.log(prop)
    dias.pop()
}

// console.log(dias instanceof Array)

dias.forEach(function (x, i) {
    // console.log(i, x)
})

let a = 123   // number
let b = '123a' // string

console.log( a == b )  // valor
console.log( a === b ) // tipo y valor

console.log( Number(a + b) )
console.log( a + Number(b) )

console.log( dias[0][3] )

console.log( 'hola'[0] )

console.log( false == 0 )
console.log( true == 1 )

console.log( false == Boolean(null) )
console.log( false == '' )
console.log( false == [] )
