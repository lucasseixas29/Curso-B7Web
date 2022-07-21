//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "AAAAAA1",
    person: "BBBBBBB"
}, {
    quote: "CCCCC2",
    person:"DDDD"
}, {
    quote: "EEEEEEE3",
    person: "FFFFFF"
}, {
    quote: "GGGGGG4",
    person: "HHHHHHHH"
}, {
    quote: "iiiiiiii5",
    person: "jjjjjjjj"
}, {
    quote: "CCCCC6",
    person:"DDDD"
}, {
    quote: "EEEEEEE7",
    person: "FFFFFF"
}, {
    quote: "GGGGGG8",
    person: "HHHHHHHH"
}, {
    quote: "iiiiiiii9",
    person: "jjjjjjjj"
}, {
    quote: "iiiiiiii10",
    person: "jjjjjjjj"
},];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})