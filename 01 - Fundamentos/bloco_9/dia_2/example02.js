const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
// Utilizando o then caso o resolve aconteça
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));