/**
 * Calculo do volume do aquario
 * @author Guilherme Holi
 */

const input = require ('readline-sync')

console.clear()

//entrada
let volume, altura, comprimento, largura

console.log("Calculo do volume do aquario")
comprimento = Number(input.question('Digite o comprimento do aquario em cm: '))
altura  = Number(input.question('Digite a altura do aquario em cm: '))
largura = Number(input.question('Digite a largura do aquario em cm: '))


//processamento
volume = (comprimento * altura * largura)/1000

//saída
console.log(`Volume do aquario é: ${volume.toFixed(2)} litros`)
