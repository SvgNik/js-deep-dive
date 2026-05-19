function filterItems(arr, condition) {
  let result = [];
  for (const item of arr) {
    if (condition(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(filterItems([1, 2, 3, 4, 5, 6], n => n % 2 === 0));
console.log(filterItems(["apple", "banana", "kiwi", "apricot"], item => item.startsWith("a")));
console.log(filterItems([10, 25, 8, 30, 15], n => n >= 20));
