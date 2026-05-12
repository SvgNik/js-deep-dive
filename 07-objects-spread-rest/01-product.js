const product = {
  title: 'iphone',
  price: 2500,
  category: 'phone',
  available: true,
};

console.log(product.title);

const key = 'category';
console.log(product[key]);

product.price = 3200;

product.rating = 4.5;

delete product.available;

console.log(product);
