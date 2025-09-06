const prompt = require("prompt-sync")();
const numeros = []
for (let i = 0; i < 3; i++){
    const numero = parseInt(prompt("Digite um número: "))
    numeros.push(numero)
}

console.log(numeros[2],"-",numeros[1],"-",numeros[0])