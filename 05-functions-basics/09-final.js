function calculateTotal(price, quantity) {
  return price * quantity;
}

function applyDiscount(total, discountPercent = 10) {
  return total - (total * discountPercent / 100)
}

function formatOrder(product, total) {
  return `Заказ: ${product} - ${total}грн`
}

const total = calculateTotal(15000, 3);
const discountedTotal = applyDiscount(total, 20);
console.log(formatOrder('Ноутбук', discountedTotal));
