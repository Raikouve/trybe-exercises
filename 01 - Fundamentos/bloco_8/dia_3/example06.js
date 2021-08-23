//  Considere que você possui duas listas: o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante.
// Deseja-se unir as listas.

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const makeListProducts = (listProducts, listPrices) => listProducts.map((product, index) => ({ [product]: listPrices[index] }));

const updatedProductsList = makeListProducts(products, prices);

console.log(updatedProductsList);
