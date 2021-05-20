/* Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

let num1 = 10;
let num2 = 7;
let num3 = 15;
let sum = num1 + num2 + num3;

if (sum % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}