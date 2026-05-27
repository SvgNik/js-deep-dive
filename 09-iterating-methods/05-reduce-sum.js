function sumNumbers(numbers) {
  return numbers.reduce((acc, n) => {
    return acc + n;
  }, 0);
}

console.log(sumNumbers([1, 4, 6, 134, 1]));
console.log(sumNumbers([12, -51, 64, 3]));
console.log(sumNumbers([]));
