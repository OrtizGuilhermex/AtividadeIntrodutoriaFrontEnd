const prompt = require ("prompt-sync")();

function calcularMontante(capital, juros, tempo){
    const i = juros/100
    const montante = capital*(1+i) ** tempo
    return montante.toFixed(2)
}

const capitalInicial = parseFloat(prompt("Capital Inicial: "))
const taxaJuros = parseFloat(prompt("Taxa de Juros(Ex:12): "))
const tempoInvestimento = parseInt(prompt("Tempo do Investimento(meses): "))
const resultado = calcularMontante(capitalInicial, taxaJuros, tempoInvestimento)

console.log("Seu investimento de R$", capitalInicial, " renderá R$ ", resultado, " em " ,tempoInvestimento, " meses.")