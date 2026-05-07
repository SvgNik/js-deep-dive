const productName = 'Laptop Pro';
const price = 1200;
const discount = 15;
const stockCount = 0;
const userBudget = 1020;

console.log(`первый и последний символ productName: ${productName[0]}, ${productName[productName.length -1]}`);

console.log(`длина названия продукта: ${productName.length}`);

console.log(`Цена после скидки: ${price - (price * discount  / 100)}`);

console.log(`входит ли цена со скидкой в бюджет пользователя: ${price - (price * discount  / 100) <= userBudget}`);

console.log(`Есть ли товар в наличии: ${stockCount > 0}`)
