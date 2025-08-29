function diferencaEmDias(data1, data2) {
    return Math.abs(new Date(data2) - new Date(data1)) / (1000 * 60 * 60 * 24);
}

let data1 = "2025-08-01";
let data2 = "2025-08-15";
console.log(diferencaEmDias(data1, data2));
