const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número: "))

if(isNaN(numero)){
    console.log("Digite um valor valida")
} else if(numero >= 20){
    console.log("Número", (numero/2))
} else {
    console.log("O número escolhido é menor que 20")
}