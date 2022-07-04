function alterar(titulo) {
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = "trocou o campo";
}

function somar(x, y) {
    let total = x + y;

    return total;
}

var resultdado = somar(10, 15);

console.log(resultdado);