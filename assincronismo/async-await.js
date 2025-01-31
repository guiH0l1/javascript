/**
 * Uso de async - await (sintaxe moderna do JD para lidar com assincronismo)
 * @author Guilherme Holi
 */

// biblioteca nativa do js para trabalhar com arquivos
const fs = require('fs')


function criarArquivo(){
    let conteudo = 'Guilherme Oliveira\nExemplo de uso dos novos recursos de assincronismo no JS (async - await)'
    gravarArquivo("texte.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try{
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso.")
    }catch(error){
        console.log(error)
    }
}

console.clear()
criarArquivo()