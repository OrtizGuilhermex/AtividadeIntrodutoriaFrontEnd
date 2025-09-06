const prompt = require("prompt-sync")();

const array = []
const quantidade = parseInt(prompt("Digite a quantidade de elementos que você deseja adicioanr a lista: "))

for (let i = 0; i < quantidade; i++){
    const numero = parseInt(prompt("Digite um número: "))
    array.push(numero)
}
array.sort((a,b) => a -b)
console.log(array)