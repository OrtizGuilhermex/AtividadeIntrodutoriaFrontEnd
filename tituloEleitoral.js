const prompt = require("prompt-sync")();

const idade = parseInt(prompt("Digite seu idade: "))

if (idade < 16){
    console.log("Não elegivel")
} else if (idade < 18){
    console.log("Eleitor facultativo")
} else {
    console.log("Elegivel")
}