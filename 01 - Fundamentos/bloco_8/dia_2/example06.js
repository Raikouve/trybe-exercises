const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  return name.length === 5;
}

const nameWithFiveLetters = names.find(findNameWithFiveLetters);

console.log(nameWithFiveLetters);
