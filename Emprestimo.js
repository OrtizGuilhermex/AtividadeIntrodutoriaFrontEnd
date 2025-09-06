const prompt = require("prompt-sync")();

const salario = parseFloat(prompt("Digite o seu salario: R$"))
const emprestimo = parseFloat(prompt("Digite o valor da prestação: R$"))

const limite = salario * 0.20

if (emprestimo > limite){
    console.log("Empréstimo não pode ser concedido")
} else {
    console.log("Empréstimo pode ser concedido")
}