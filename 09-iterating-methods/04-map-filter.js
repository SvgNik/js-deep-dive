const orders = [
  { id: 1, product: "Laptop", price: 1000, paid: true },
  { id: 2, product: "Phone", price: 500, paid: false },
  { id: 3, product: "Tablet", price: 750, paid: true },
  { id: 4, product: "Watch", price: 300, paid: false },
  { id: 5, product: "Monitor", price: 800, paid: true },
];

const order = orders.filter(order => order.paid);
console.log(order);

const result = order.map(order => {
  return (`${order.product} - $${order.price}`);
})
console.log(result);
