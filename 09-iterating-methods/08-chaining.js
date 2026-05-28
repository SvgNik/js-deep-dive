function totalInStock(products) {
  return products.filter(product => product.inStock)
    .map(product => product.price)
    .reduce((acc, price) => acc + price, 0);
}

console.log(totalInStock([
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Pen", price: 5, inStock: false },
  { name: "Mouse", price: 25, inStock: true },
]));

console.log(totalInStock([
  { name: "Phone", price: 1000, inStock: false },
  { name: "Pen", price: 5, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
]));


console.log(totalInStock([]));
