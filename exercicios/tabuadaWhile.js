/**
 * Tabuada usando a estrutura while
 * @author Guilherme Holi
 */

const input = require('readline-sync')
let valor
let i = 1 //Apoio a logica e laço while

console.clear()
console.log("Tabuada While")


valor = Number(input.question("Digite o valor da Tabuada: "))
while(i < 11){
    console.log(`${valor} X ${i} = ${valor * i}`)
    i++
}