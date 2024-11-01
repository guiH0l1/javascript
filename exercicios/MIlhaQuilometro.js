/**
 * Conversão de milhas para quilômetros:
Desenvolva um programa que converta uma distância em milhas para quilômetros.
@author Guilherme Holi
 */


console.clear()
console.log("CONVERTER MILHA PARA KILOMETRO")
const input = require('readline-sync')

let milhas, km

milhas = Number(input.question("Insira um valor para converter milhas para quilometros: "))

km = milhas * 1.6

console.log(`O valor de ${milhas} milhas convertido é ${km.toFixed(2)}km`)