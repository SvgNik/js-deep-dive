function calculateDiscount(price, discount) {
  return price - (price * discount / 100);
}

console.log(calculateDiscount(1000, 20))
console.log(calculateDiscount(600, 40))
console.log(calculateDiscount(4300, 15))
