let pessoa = {
    nome: 'Lucas',
    sobrenome: 'Seixas',
    idade: 22,
    social:{
        facebook: 'Lucas Seixas',
        instagram: {
            url: '@lucasseixas__',
            seguidores: 87,
        }
    } 
    
}

function pegarnomecompleto({nome, sobrenome}) {
    return `${nome} ${sobrenome}`
}

console.log(pegarnomecompleto(pessoa))