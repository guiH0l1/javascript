/**
 * Jogo Jokenpo
 * @author Guilherme Holi
 */

const input = require('readline-sync')

let computador, jogador

console.clear()
console.log('_____Jokenpo_________')


console.log('1, Pedra')
console.log('2, Papel')
console.log('3, Tesoura')

//Lógica do jogador
jogador = Number(input.question("Digite uma opcao desejada: "))
console.log("")
switch (jogador) {
	case 1:
		console.log("PEDRA")
		break;
	case 2:
		console.log("PAPEL")
		break;
	case 3:
		console.log("TESOURA")
		break;
	default:
		console.log("OPÇÃO INVÁLIDA!")
		break;
}

//LÓGICA DO COMPUTADOR

computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
	case 1:
		console.log("COMPUTADOR: PEDRA")
		break;
	case 2:
		console.log("COMPUTADOR: PAPEL")
		break;
	case 3:
		console.log("COMPUTADOR: TESOURA")
		break;
}

//logica para determinar o vencedor
if (jogador === computador) {
	console.log("EMPATE")	
} else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2){
	console.log("VITORIA")
} else {
	console.log("DERROTA")
}


