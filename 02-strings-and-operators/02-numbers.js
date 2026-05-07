const price = 80;
const taxRate = 0.19;
const quantity = 3;

console.log(`Итоговая стоимость без налога: ${price * quantity}.`);

console.log(`Налог на всю покупку: ${price * quantity * taxRate}`);

console.log(`Итого с налогом: ${(price * quantity) + (price * quantity * taxRate)}`);
