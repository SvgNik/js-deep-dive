const numbers = [34, 7, 100, 23, 1, 89];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

const fruits = ['banana', 'apple', 'mango', 'cherry'];
console.log(fruits.sort());
