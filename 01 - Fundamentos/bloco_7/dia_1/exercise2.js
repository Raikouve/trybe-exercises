// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

// Modo Ternary Operator:
const fatorial = (num) => !(num > 1) ? 1 : fatorial(num - 1) * num;

console.log(factorial(6));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
