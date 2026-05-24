function transform(arr, fn) {
  const result = [];
  for (let number of arr) {
    result.push(
      fn(number)
    );
  }
  return result;
}

const double = x => x * 2;
const square = x => x ** 2;


console.log(transform([1, 3, 6, 2, 4], double));
console.log(transform([1, 3, 6, 2, 4], square));
