//FOR LOOP
//FOR LOOP ARRAY

/*let texto = '';

for(let i = 1; i < 50;i++ ) {
    texto += +i + '<br/>';
}

document.getElementById("demo").innerHTML = texto;*/

/*let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla', 'Jaguar'];

let html = '<ul>';

for(let i in carros) {
    html+= '<li>'+ carros[i] + '</li>';
}

html += '</ul>';
document.getElementById('demo').innerHTML = html*/

let lot = ''

for(let c= 1; c <= 60; c++) {

    lot = lot + c + '<br/>';

}
document.getElementById('demo').innerHTML = lot;