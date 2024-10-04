/**
 * Desconto do preço de uma compra
 * @author Guilherme Holi
 */

const input = require('readline-sync')

console.clear()

let totalDesconto, desconto, total

total = Number(input.question("Digite o valor do preco total: "))
desconto = Number(input.question("Digite o valor de desconto em porcentagem: "))
totalDesconto = total - (total * desconto / 100)

console.log(`preço final apos o desconto é ${totalDesconto.toFixed(2)}`)

