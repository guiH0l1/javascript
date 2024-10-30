/**
 * Estudo das funções com parametros e retorno
 * @author Guilherme Holi
 */

function somar(a, b) {
    return (console.log(a + b))
}
somar(5, 2)

const somarA = function(a , b){
    return (console.log(a + b))
}

somarA(10, 2)

const somarAF = (a , b) => {
    return (console.log(a + b))
}

somarAF(2, 2)

// NA FUNÇÃO ABAIXO O RETORNO É IMPLICITO
const somarAFS = (a, b) =>  console.log(a + b)
somarAFS(3, 9)