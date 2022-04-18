/*document.getElementById('titulo').innerHTML ='Opa, tudo bem?'

document.write('algum texto')

alert('Mensagem de alerta')

console.log('a mensagem q lalalallaa')*/

/*var nome = 'Lucas'
var sobrenome = 'Seixas'
var nomecompleto = nome+ ' ' + sobrenome
alert(nomecompleto)*/

var hora = 05
if(hora< 12 && hora >=5) {
    console.log('Bom dia')
}else if(hora>=12 && hora <18) {
    console.log('Boa Tarde')
} else if (hora>=18 &&hora <=23) {
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}