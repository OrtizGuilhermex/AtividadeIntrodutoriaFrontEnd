const prompt = require("prompt-sync")();

const venda = parseFloat(prompt("Digite o valor da venda: R$"))

const lucroMenor = venda*0.45
const lucroMaior = venda*0.30

if(venda > 20){
    console.log("O valor da venda foi: R$", venda, " e seu lucro foi de: R$",lucroMenor)
} else {
    console.log("O valor da venda foi: R$", venda, " e seu lucro foi de: R$",lucroMaior)
}