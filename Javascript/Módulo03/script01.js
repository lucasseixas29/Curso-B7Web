function clicou()  {
    document.getElementById("titulo").innerHTML = "Obrigado";
}
function digitou(evento){
   if(evento.keyCode==13 && evento.ctrlKey == true) {
       let texto = document.getElementById("campo").value;

       console.log(texto);
   }

;
} 

function azul() {
limpar();

    document.getElementById("titulo").classList.add('azul');

}


function vermelho() {
    limpar()
    document.getElementById("titulo").classList.add('vermelho');

}

function verde() {
    limpar()

    document.getElementById("titulo").classList.add('verde');
    
}
function limpar() {
    document.getElementById('titulo').classList.remove("azul");
    document.getElementById('titulo').classList.remove("vermelho");
    document.getElementById('titulo').classList.remove("verde");

}

function mostrarsite(elemento) {
    elemento.style.display= 'none'
    document.getElementById("site").style.display = 'block'
}



let igredientes = [
    ['uva', 'pera', 'maça'],
    ['arroz', 'macarrão']
];
console.log(igredientes [1] [0]);

let carros = [
    'palio',
    'uno',
    'corolla',
    'ferrari',
]


let carro = [
    {nome: 'fiat', modelo: 'palio'},
    {nome: 'fiat', modelo: 'uno'},
    {nome: 'toyota', modelo: 'Corolla'}
]

console.log(carro[2].nome)