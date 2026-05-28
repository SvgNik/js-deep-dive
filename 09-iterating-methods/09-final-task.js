function totalRevenue(sales) {
  return sales.map(sale => sale.amount)
    .reduce((acc, amount) => acc + amount, 0);
}

function revenueBySeller(sales) {
  return sales.reduce((acc, sale) => {
    acc[sale.seller] = (acc[sale.seller] || 0) + sale.amount
    return acc;
  }, {});
}

console.log(totalRevenue([
  { seller: "Anna", product: "Laptop", amount: 1000 },
  { seller: "Boris", product: "Mouse", amount: 25 },
  { seller: "Anna", product: "Phone", amount: 500 },
]));

console.log(totalRevenue([]));

console.log(revenueBySeller([
  { seller: "Anna", product: "Laptop", amount: 1000 },
  { seller: "Boris", product: "Mouse", amount: 25 },
  { seller: "Anna", product: "Phone", amount: 500 },
]));

console.log(revenueBySeller([]));
