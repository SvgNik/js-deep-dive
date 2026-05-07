const price = 1001;

if (price >= 1000) {
  console.log(`Ваша скидка: 20%`);
} else if (price <= 999 && price >= 500) {
  console.log(`Ваша скидка: 10%`);
} else {
  console.log(`Ваша скидка: 0%`);
}
