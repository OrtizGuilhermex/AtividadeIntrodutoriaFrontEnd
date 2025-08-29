const prompt = require("prompt-sync")();

function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    }
    return false;
}

const ano = parseInt(prompt("Digite um ano para verificar se é bissexto: "));

if (isNaN(ano) || ano <= 0) {
    console.log("Insira um valor válido.");
} else {
    if (anoBissexto(ano)) {
        console.log(ano + " é um ano bissexto.");
    } else {
        console.log(ano + " não é um ano bissexto.");
    }
}
