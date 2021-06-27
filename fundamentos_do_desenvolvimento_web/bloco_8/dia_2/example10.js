const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((personName) => name === personName);

console.log(hasName(names, 'Bruna'));
