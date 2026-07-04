const orders = [
  { id: 1, customer: "Anna", total: 120, status: "paid" },
  { id: 2, customer: "Boris", total: 80, status: "pending" },
  { id: 3, customer: "Anna", total: 200, status: "paid" },
  { id: 4, customer: "Clara", total: 50, status: "cancelled" },
  { id: 5, customer: "Boris", total: 300, status: "paid" },
];

function sumByCustomer(orders) {
  const result = orders.reduce((acc, order) => {
    acc[order.customer] = (acc[order.customer] || 0) + order.total;
    return acc;
  }, {});
  return result;
}

console.log(sumByCustomer(orders));
