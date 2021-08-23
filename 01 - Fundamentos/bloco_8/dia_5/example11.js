const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const productDetails = ({ name, price, seller }) => console.log(`Promoção! ${name} por apenas ${price} é só aqui na ${seller}!`);

productDetails(product);