function trocarimagem(filename, animalname){
    document.querySelector('.imagem').setAttribute('src', 'imagens/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);

}

function pegaranimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é: "+animal);
}

function subirtela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function decidirbotaoscroll() {
    if(window.scrollY == 0) {
    // ocultar o botão
    document.querySelector('.scrollbutton').style.display = 'none';

     } else {
         // mostrar o botão
         document.querySelector('.scrollbutton').style.display= 'block';
            }
}

window.addEventListener('scroll', decidirbotaoscroll);