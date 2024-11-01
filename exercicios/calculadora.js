/**
 * Desenvolvimento de uma calculadora
 * @author Guilherme Holi
 */

const input = require('readline-sync')

let a, b, opcao, repeticao


function calcularNovamente(a, b) {
    

do {
    console.clear()
    console.log(" _____     _         _       _             ")
    console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
    console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
    console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")
    console.log("")

    a = Number(input.question("Digite o primeiro numero: "))
    b = Number(input.question("Digite o segundo numero: "))

    console.log("")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Calcular a porcentagem")
    opcao = Number(input.question("Digite a opcao desejada: "))
    console.log("")

    function calculo(a, b) {
        switch (opcao) {
            case 1:
                console.log(`${a} + ${b} = ${a + b}`)
                break;
            case 2:
                console.log(`${a} - ${b} = ${a - b}`)
                break;
            case 3:
                console.log(`${a} * ${b} = ${a * b}`)
                break;
            case 4:
                console.log(`${a} / ${b} = ${a / b}`)
                break;
            case 5:
                console.log(`${b}% de ${a} = ${(b * a) / 100}`)
                break;
        }
    }
    calculo(a, b)
    repeticao = input.question("Deseja calcular novamente? (S/N)")
} while (repeticao === "s")

}

calcularNovamente()
