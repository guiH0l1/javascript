/** 
    Eventos de intervalo
    @author Guilherme Holi

*/

function piscar(){
    let ligada = false 
    // função nativa do js para gerar intervalos
    // 1000 (1000ms = 1s)
    setInterval(() => {
        if (ligada === false){
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
        ligada = !ligada // "!" inverteu NOT
    }, 1000)
}