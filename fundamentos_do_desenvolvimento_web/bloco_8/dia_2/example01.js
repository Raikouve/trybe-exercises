const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exemplo:
 const multipliesFor2 = (element) => {
   console.log(`${element} * 2: ${element * 2}`);
 };

 numbers.forEach(multipliesFor2);

// Meu jeito:
const multiplyFor2 = numbers.forEach((number) => console.log(number * 2));
