const imgs = document.getElementById('imagens')
const imagem = document.querySelectorAll('#imagens img')
let indice = 0

function carrossel(){
    indice++
    if(indice >= imagem.length){
        indice = 0
    }
    //indice 0 posição inicial | 1: deslocar 512px esq | 2: deslocar 1024 a esq
    imgs.style.transform = `translateX(${-indice * 512}px)` 
}

setInterval(carrossel, 1800)//ajuste