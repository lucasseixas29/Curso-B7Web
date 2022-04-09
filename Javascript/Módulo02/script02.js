//definição das variáveis
var nome = "Lucas"; // nome do usuário
var idade = 90;
var salvo = true;
var cidade;
//pegando o TIPO da variável idade
var tipo = typeof idade;
//Mostrando no console o resultado
console.log(tipo);

function alterar(titulo) {
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = titulo;
}

function somar(x, y) {
let total = x +y;

return total;

}
var resultado = somar(10,15);

console.log(resultado);