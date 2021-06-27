const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// Exemplo:
 const convertToUpperCase = (name, index) => {
   names[index] = name.toUpperCase();
 };

 names.forEach(convertToUpperCase);
 console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// Meu jeito: 
const namesToUpperCase = names.forEach((name) => console.log(name.toUpperCase()));
