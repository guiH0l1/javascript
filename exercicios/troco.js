/**
 * Valor pago e troco
 * @author Guilherme Holi
 */

const input = require ('readline-sync')

console.clear()
//variaveis
let valorTotal, pagamento, troco

valorTotal = Number(input.question("Valor Total: "))
pagamento = Number(input.question("Digite o valor pago: "))


troco =  pagamento - valorTotal

console.log(`Total do troco: ${troco.toFixed(2)}`)