const isLoggedIn = true;
const membershipLevel = 'premium';
const cartTotal = 1200;

if (isLoggedIn && membershipLevel === 'premium' && cartTotal >= 1000) {
  console.log('Бесплатная доставка и скидка 15%');
} else if (isLoggedIn && (membershipLevel === 'premium' || membershipLevel === 'standard') && cartTotal >= 500) {
  console.log('Бесплатная доставка');
} else if (isLoggedIn && cartTotal >= 1000) {
  console.log('Скидка 5%')
} else if (isLoggedIn) {
  console.log('Стандартные условия')
} else {
  console.log('Войдите в систему')
}
