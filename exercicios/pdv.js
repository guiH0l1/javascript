/**
 * PDV
 * @author Guilherme Holi
 */

const input = require('readline-sync')

let total, desconto, totalDesconto, valorDesconto, valorPago, troco

console.clear()




    
 console.log("________  ______   ")        
 console.log("(  ____  )(  __  \\  |\\     /|")
 console.log("| (    ) || (  \\  ) | )   ( |")
 console.log("| (____) || |   ) | | |   | |")
 console.log("|  ______)| |   | | ( (   ) )")
 console.log("| (       | |   ) |  \\ \\_/ / ")
 console.log("| )       | (__/  )   \\   /  ")
 console.log("| /       (______/     \\_/   ")
 console.log("")


 //entrada1
 total = Number(input.question("Digite o valor total da compra: "))
 desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento1
 valorDesconto = (desconto * total) / 100
 //processamento2
 totalDesconto = total - valorDesconto

//saída1
console.log("")
console.log("-----------------------------------")
console.log(`total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total do desconto R$ ${totalDesconto}`)
console.log("")

 //entrada2
 valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

//processamento3
troco = valorPago - totalDesconto

//saída2
console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco ${troco.toFixed(2)}`)
console.log("-----------------------------------")
 

                                                             
        
