function filtrarNumeros(array, num) {
    return array.filter(element => element > num);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumeros(array, num));