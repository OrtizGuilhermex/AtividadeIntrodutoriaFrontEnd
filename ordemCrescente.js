function ordenarArray(arr) {
  if (arr[0] > arr[1]) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }

  if (arr[1] > arr[2]) {
    [arr[1], arr[2]] = [arr[2], arr[1]];
  }

  if (arr[0] > arr[1]) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }

  return arr;
}

const numeros = [5, 2, 8];
const numerosOrdenados = ordenarArray(numeros);

console.log(numerosOrdenados);