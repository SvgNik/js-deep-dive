const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: true },
  { name: "Carol", age: 32, active: false },
  { name: "Dave", age: 19, active: true },
  { name: "Eve", age: 15, active: false },
];

const result = users.filter(user => user.age >= 18 && user.active);

console.log(result);
