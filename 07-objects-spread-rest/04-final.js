const products = [
  { title: "Laptop", price: 999, category: "electronics", inStock: true },
  { title: "Phone", price: 499, category: "electronics", inStock: false },
  { title: "Desk", price: 299, category: "furniture", inStock: true },
  { title: "Chair", price: 199, category: "furniture", inStock: true },
  { title: "Tablet", price: 399, category: "electronics", inStock: true },
];

for (const product of products) {
  console.log(product.title + ' ' + product.price);
}

let total = 0;

for (const product of products) {
  total += product.price;
}

console.log(total);

const updatedLaptop = { ...products[0], price: 849, discount: true};

console.log(updatedLaptop);

function getTotalByCategory(products, category) {
  let total = 0;
  for (const product of products) {
    if (product.category === category) {
       total += product.price;
    }
  }
  return total;
}

console.log(getTotalByCategory(products, 'electronics'));
console.log(getTotalByCategory(products, 'furniture'));

console.log(Object.keys(products[0]));
console.log(Object.values(products[0]));
