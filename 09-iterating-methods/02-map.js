const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 },
];

const newProduct = products.map(product => {
  return {...product, price: product.price * 1.2, currency: 'USD'}
});

console.log(products);
console.log(newProduct);
