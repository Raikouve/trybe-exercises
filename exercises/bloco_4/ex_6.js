/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

let piece = 'Rei';
let sPiece = piece.toLowerCase();

switch (sPiece) {
  case 'peão':
    console.log('Move-se uma casa à frente');
    break;

  case 'cavalo':
    console.log('Move-se duas casas para frete e uma para o lado');
    break;

  case 'bispo':
    console.log('Move-se nas diagonais');
    break;

  case 'torre':
    console.log('Move-se reto, na vertical e horizontal');
    break;

  case 'rainha':
    console.log('Move-se em todas as direções');
    break;

  case 'rei':
    console.log(' Move-se uma casa, em todas as direções');
    break;

  default:
    console.log('Peça Inválida');
}