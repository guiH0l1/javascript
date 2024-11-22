/**
* Fundamentos da POO
* @author Guilherme Holi
* */


console.clear()
class Carro {
    // Atributos
    constructor(modelo, ano, cor) {
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }
    // Ações
    criarCarro() {
        console.log(`Carro criado: ${this.modelo}, ${this.ano}, ${this.cor}`)
    }
    // Método ligar o carro
    ligar() {
        console.log("O carro está ligado.");
    }
    // Método desligar o carro
    desligar() {
        console.log("O carro está desligado.");
    }
    // Método acelerar o carro
    acelera() {
        console.log("O carro está acelerando.");
    }
}

class Modelo extends Carro {
    // Atributos
    constructor(modelo, ano, cor, envergadura) {
        super(modelo, ano, cor)
        this.envergadura = envergadura
    }
    // Ações
    criarAviao() {
        console.log(`Avião criado: ${this.modelo}, ${this.cor}, ${this.ano}, ${this.envergadura}`)
    }
    aterrizar() {
        console.log("Avião Aterrizando")
    }
    // Polimorfismo
    acelera() {
        console.log("Avião decolando!!!!");
    }
}

/** Criar objetos (carros) */


console.log("  ___ __ _ _ __ _ __ ___  ___ ")
console.log(" / __/ _` | '__| '__/ _ \\/ __|")
console.log("| (_| (_| | |  | | | (_) \\__ \\")
console.log(" \\___\\__,_|_|  |_|  \\___/|___/")


// Instanciar objeto
const carro1 = new Carro("mercedes cls 63", 2012, "preto")
carro1.criarCarro()
carro1.ligar()
carro1.acelera()
carro1.desligar()
console.log("---------------------------------------")

const carro2 = new Carro("volkswagen Polo", 2020, "branco")
carro2.criarCarro()
carro2.ligar()
carro2.acelera()
carro2.desligar()

console.log("")


console.log("             _              ")
console.log("            (_)             ")
console.log("  __ ___   ___  __ _  ___  ")
console.log(" / _` \\ \\ / / |/ _` |/ _ \\ ")
console.log("| (_| |\\ V /| | (_| | (_)|")
console.log(" \\__,_| \\_/ |_|\\__,_|\\___/ ")




// Instanciar um objeto
const aviao1 = new Modelo("embraer phenom 300E", "branco", 2007, 16)
aviao1.criarAviao()
aviao1.aterrizar()
aviao1.acelera()
console.log("---------------------------------------")

const aviao2 = new Modelo("bombardier challenger 3500", "branco e preto", 2021, 21)
aviao2.criarAviao()
aviao2.aterrizar()
aviao2.acelera()
console.log("---------------------------------------")