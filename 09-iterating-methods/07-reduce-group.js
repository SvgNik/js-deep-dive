function groupByCategory(products) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product.name);
    return acc;
  }, {});
}


console.log(groupByCategory([
  { name: "Laptop", category: "tech" },
  { name: "Apple", category: "food" },
  { name: "Phone", category: "tech" },
]));

console.log(groupByCategory([
  { name: "Laptop", category: "tech" },
  { name: "Phone", category: "tech" },
  { name: "T-short", category: "clothes" },
  { name: "Banana", category: "food" },
  { name: "Phone", category: "tech" },
]));

console.log(groupByCategory([]));
