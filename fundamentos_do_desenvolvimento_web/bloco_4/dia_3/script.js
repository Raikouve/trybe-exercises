/* Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
 */

/* devemos utilizar o array fruits ;
o termo " percorra " indica uma estrutura de repetição, ou loop;
" somando todos os valores " mostra que devemos ter uma variável que guarda o valor da soma dos valores;
o termo " caso " indica uma estrutura condicional, ou if ;
" imprima o valor final " indica um console.log ; */

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1){
  sum +=fruits[index];
}

if (sum > 15) {
  console.log(sum)
} else {
  console.log('valor menor que 16');
}