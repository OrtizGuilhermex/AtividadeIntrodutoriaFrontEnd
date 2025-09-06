const prompt = require("prompt-sync")();

function Reajuste(valor){
    console.log("O valor que voce escolheu é: R$",valor)
    console.log("Com reajuste de 15% ficou: R$", (valor*1.15))
}

const valorReajuste = parseFloat(prompt("Digite o valor que você deseja reajustar: R$"))

if(isNaN(valorReajuste)){
    console.log("Insira um vaor válido")
} else{
    console.log(Reajuste(valorReajuste))
}