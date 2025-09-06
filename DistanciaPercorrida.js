const prompt = require("prompt-sync")();

function distanciaPercorrida(distancia){
    console.log("Distancia Percorrida(km): " + distancia )
}

const velocidadeMedia = parseInt(prompt("Digite a velocidade média(km/h): "))
const tempo = parseInt(prompt("Digite o tempo da viagem(h)"))

 const distancia = velocidadeMedia * tempo 

 console.log(distanciaPercorrida(distancia))