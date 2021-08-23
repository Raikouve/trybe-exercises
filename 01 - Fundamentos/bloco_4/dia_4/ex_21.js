/* Crie uma função que receba uma arrayWord e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function verificaPalindrome(string) {

  let arrayWord = string.split('');
  let reverseWord = [];
  let palindrome = [];

  for (let index = (arrayWord.length - 1); index >= 0; index -= 1) {
    reverseWord.push(arrayWord[index]);
  }
  for (let i = 0; i < arrayWord.length; i += 1) {
    for (let j = 0; j < reverseWord.length; j += 1) {
      if (reverseWord[j] === arrayWord[i]) {
        palindrome.push(reverseWord[j]);
        break;
      }
    }
  }
  if (palindrome.length === arrayWord.length) {
    console.log('Is palindrome!');
    return true;
  } else {
    console.log('It\'s not a palindrome!' )
    return false;
  }
}

let result = verificaPalindrome('desenvolvimento');
console.log(result);