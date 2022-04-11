let dia = 7;
let dianome = '';

switch(dia) {
    case 6:
    case 7:
        dianome= "final de semana";
        break;
    default:
        dianome= "dia de semana";
        break;
}


//FOR LOOP
// FOR LOOP ARRAY
let carros = ['ferrari','fusca', 'palio', 'onix','corolla'];
let html = '<ul>';

for(let i in carros) {
    html += '<li>' +carros[i] +'</li>'
}


html += '</ul>';
document.getElementById("demo").innerHTML=html;