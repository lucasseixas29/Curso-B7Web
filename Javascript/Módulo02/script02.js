//definição das variáveis
var nome = "Lucas"; // nome do usuário
var idade = 90;
var salvo = true;
var cidade;
//pegando o TIPO da variável idade
var tipo = typeof idade;
//Mostrando no console o resultado
console.log(tipo);

function alterar() {
    document.getElementById('titulo').innerHTML = "trocou o titulo";
    document.getElementById('campo').value = "trocou o campo";
}
alterar();