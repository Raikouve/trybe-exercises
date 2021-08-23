const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Ordenando o array de pessoas em ordem crescente
people.sort((personA, personB) => personA.age - personB.age);

console.log(people);
