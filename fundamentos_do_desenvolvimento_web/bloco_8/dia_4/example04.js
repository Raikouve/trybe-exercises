const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Somando todos os números pares  do array:
const sumEven = (acc, num) => (num % 2 === 0) ? acc + num : acc;

const sumNumbers = (array) => array.reduce(sumEven, 0);

console.log(sumNumbers(numbers));
