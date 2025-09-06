const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Digite o primeiro número: "))
const num2 = parseInt(prompt("Digite o segundo número: "))
const soma = num1 + num2

if (isNaN(num1) || isNaN(num2)){
    console.log("Digite um valor válido");
} else if(soma >= 10){
    console.log("A soma desses números é: ", soma);
} else {
    console.log("A soma desses números não ultrapassa 10");
}