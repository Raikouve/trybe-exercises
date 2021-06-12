/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
 */

let arr = [];
let divArr = [];

for (index = 1; index <= 25; index += 1){
  arr.push(index);
}

for (let i = 0; i < arr.length; i += 1) {
  divArr.push(arr[i] / 2);
}

console.log(divArr);