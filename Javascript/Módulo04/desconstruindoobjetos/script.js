let pessoa = {
    nome: 'Lucas',
    sobrenome: 'Seixas',
    idade: 22,
    social:{
        facebook: 'Lucas Seixas',
        instagram: 'lucasseixas__'
    }  , 
    nomecompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}



let { nome, sobrenome, idade } = pessoa
console.log(nome, sobrenome, idade)