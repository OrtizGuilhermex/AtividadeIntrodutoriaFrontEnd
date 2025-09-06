const prompt = require("prompt-sync")();

function sucessor(numero){
    console.log("O número escolhido foi: ", numero)
    console.log("Seu sucessor é: ", (numero+1))
    console.log("Seu antecessor é: ", (numero-1))
}

const numEscolhido = parseInt(prompt("Digite o numero que você deseja: "))

if(isNaN(numEscolhido)){
    console.log("Insira um valor valido")
} else {
    console.log(sucessor(numEscolhido))
}