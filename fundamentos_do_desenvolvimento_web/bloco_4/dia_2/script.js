let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe'); /* Adiciona elemento ao final do array */

tasksList.unshift('Acordar'); /* Adiciona elemento no início do array */

tasksList.pop(); /* Remove o último elemento do array */

tasksList.shift() /* Remove o primeiro elemento do array */

console.log(tasksList);

let searchForFirsTask = tasksList[0];

console.log(searchForFirsTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
