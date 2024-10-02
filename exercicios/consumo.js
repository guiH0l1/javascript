/**
 * calculo de consumo de combustivel
 * @author Guilherme Holi
 */

const input = require('readline-sync')


console.clear()

let consumo, distancia, litros

distancia = Number(input.question("Digite a distancia percorrida: "))
litros = Number(input.question("Digite a quantidade de litros: "))
consumo = distancia / litros

console.log(`Consumo médio de combustivel é de ${consumo.toFixed(1)} por km`)

