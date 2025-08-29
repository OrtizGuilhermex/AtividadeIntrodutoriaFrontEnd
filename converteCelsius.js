const prompt = require("prompt-sync")();

function converterCelsius(celsius) {
    return (celsius * 9 / 5) + 32;
}

const temperatura = parseFloat(prompt("Digite uma Temperatura para Converter: "));

if (isNaN(temperatura)) {
    console.log("Insira um valor válido.");
} else {
    const fahrenheit = converterCelsius(temperatura);
    console.log(temperatura + "°C é igual a " + fahrenheit + "°F.");
}
