/**
 * Calculo de alcool e gasolina
 * @author Guilherme Holi
 */

const input = require('readline-sync')

let alc, gas

console.clear()

console.log("Calculo para verificar que tipo de combustivel é mais vantajoso")  
alc = Number(input.question("Digite o valor do Alcool: "))
gas = Number(input.question("Digite o valor da Gasolina: "))

if (alc < 0.7 * gas) {
    console.log("Abasteça com alcool")   
} else {
    console.log("Abasteça com gasolina")
}