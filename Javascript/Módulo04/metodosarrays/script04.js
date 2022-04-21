let lista = [
    {id: 1,nome: 'Lucas',  sobrenome:'Seixas'},
    {id:2, nome: 'Paulo', sobrenome:'XYZ'},
    {id:3, nome: 'Carlos', sobrenome: 'Da Silva'}
]
let pessoa = lista.find(function(item){
    return (item.id == '3') ? true : false
})

let res = pessoa

console.log(res)



/*lista2 = lista.findIndex(function(item){ // para saber a posição
   return (item==16) ? true:false
})

let res = lista2

console.log(res)*/