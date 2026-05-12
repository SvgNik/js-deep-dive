const product = {
  title: 'iphone',
  price: 2500,
  category: 'phone',
  available: true,
};

console.log(product.title);

const key = 'category';
console.log(product[key]);

product.price = 3200;

product.rating = 4.5;

delete product.available;

console.log(product);

/* выведи title через dot notation

выведи category через bracket notation с переменной

измени price на другое число

добавь свойство rating со значением 4.5

удали свойство available

выведи итоговый объект */
