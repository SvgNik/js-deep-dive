const first = ['apple', 'banana'];
const second = ['mango', 'cherry', 'grape'];

const allFruits = first.concat(second);
console.log(allFruits);

console.log(first);
console.log(second);

console.log(allFruits.join(" | "));

allFruits.reverse();
console.log(allFruits);

console.log(first); // не изменился, потому что изменяли массив allFruits через reverse, first не трогали
