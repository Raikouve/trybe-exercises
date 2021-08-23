const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

// Exemplo usando for loop tradicional:
const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

// Exemplo usando a função map:
const fullNamesMap = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNamesMap); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
