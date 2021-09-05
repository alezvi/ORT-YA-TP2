
// ES5, ES6 ... ES12
// EcmaScript

function objeto() {
    let a = 1
    this.a = 'uno'

    function sumar (x) {
        a = a + x
        return this
    }

    function resultado () {
        return a
    }

    return {
        sumar,
        resultado
    }
}

const resultado = objeto()
const instancia = new objeto()

console.log( instancia instanceof objeto ) // false
console.log( instancia instanceof Object ) // true

console.log(resultado)

// console.log( 
    // instancia.sumar(9).sumar(10).sumar(35).resultado()
// )
