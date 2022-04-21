let cartao = '1234123412341234'
let lastdigits = cartao.slice(0,3)

let cartaomascarado = lastdigits.padEnd(16, '*')
console.log( cartaomascarado)