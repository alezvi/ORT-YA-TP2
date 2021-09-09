let productos = [
    {
        id : 1,
        nombre : "...",
        price : 785.77,
        qty : 3
    },
    {
        id : 1,
        nombre : "...",
        price : 9456.99,
        qty : 1
    }
]

// let total = productos.reduce(function (a, b) {
//     return a + (b.price * b.qty)
// }, 0)

let totalCompleto = productos.reduce(function (a,b) {
    return {
        total : a.total + (b.qty * b.price),
        qty : a.qty + b.qty
    }
}, {
    total : 0,
    qty : 0
})

let {total, qty} = totalCompleto

console.log(total, qty)
