const products = ['milk', 'bread', 'eggs', 'butter', 'cheese'];

console.log(products.includes('eggs'));
console.log(products.includes('sugar'));
console.log(products.indexOf('butter'));
console.log(products.indexOf('water')); // -1, -1 выводиться всегда в случае если значение не было найдено

for (const product of products) {
  console.log(`Product: ${product}`);
}
