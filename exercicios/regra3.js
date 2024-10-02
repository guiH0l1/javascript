/**
 * Calculo de porcentagem 
 * @author Guilherme Holi
 */


const input = require('readline-sync')

console.clear()

let x, y, valor

x = Number(input.question("Digite o valor da porcentagem: "))
y = Number(input.question("Digite o valor do numero:  "))

valor = (x * y)/100

console.log(`${x}% de ${y} é igual a ${valor.toFixed(1)}`)