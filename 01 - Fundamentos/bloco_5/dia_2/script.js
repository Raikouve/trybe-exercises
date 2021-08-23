//Acesse o elemento elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'green';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let primeiroFilhoDoFilhoText = document.createElement('p');
primeiroFilhoDoFilho.innerText = 'Funcionou?';
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFIlhoText);

//Acesse o primeiroFilho a partir de pai .
document.querySelector('#pai').firstChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').previousSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').parentNode.innerText

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai .
document.getElementById('pai').children[2];

//Crie um irmão para elementoOndeVoceEsta .
let irmaoDeElementoOndeVoceEsta = document.createElement('div');
pai.appendChild(irmaoDeElementoOndeVoceEsta);

//Crie um filho para elementoOndeVoceEsta .
let elementoOndeVoceEsta2 = document.querySelector('#elementoOndeVoceEsta');
let filhoDeElementoOndeVoceEsta = document.createElement('div');
elementoOndeVoceEsta2.appendChild(filhoDeElementoOndeVoceEsta);

//Crie um filho para primeiroFilhoDoFilho .
let filhoDePrimeiroFilhoDoFilho = document.createElement('div');
primeiroFilhoDoFilho.appendChild(filhoDePrimeiroFilhoDoFilho);

//A partir desse filho criado, acesse terceiroFilho .



