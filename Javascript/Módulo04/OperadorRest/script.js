/*function adicionar(...nomes) {

console.log(nomes)
}
adicionar('Lucas','Myrella','claudia','Samuel')*/

function   adicionar(nomes,...novosnomes) {
    let novoconjunto = [
        ...nomes,
        ...novosnomes
    ]
    return novoconjunto

}
let nomes = ['Lucas','Luis']

let outros = adicionar(nomes, 'Antonia','Jaime','joel')

console.log(outros)