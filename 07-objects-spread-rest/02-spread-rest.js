const base = { title: 'iPhone', price: 999 };
const extra = { color: 'black', inStock: true };

const product = { ...base, ...extra };
const discounted = { ...product, price: 799 };

console.log(product);
console.log(discounted);

function getTotal(...prices) {
  let total = 0;
  for (const price of prices) {
    total = total + price;
  }
  return total;
}

console.log(getTotal(799, 999, 2300));
console.log(getTotal(1333, 255, 766));
console.log(getTotal(749, 1499, 2699));
