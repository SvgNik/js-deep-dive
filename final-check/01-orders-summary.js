const orders = [
  { id: 1, customer: "Anna", total: 120, status: "paid" },
  { id: 2, customer: "Boris", total: 80, status: "pending" },
  { id: 3, customer: "Anna", total: 200, status: "paid" },
  { id: 4, customer: "Clara", total: 50, status: "cancelled" },
  { id: 5, customer: "Boris", total: 300, status: "paid" },
];

function getPaidTotal(orders) {
  const paidOrders = orders.filter((order) => order.status === "paid");
  const totalSum = paidOrders.reduce((acc, order) => {
    return acc + order.total;
  }, 0);
  return totalSum;
}

console.log(getPaidTotal(orders));
