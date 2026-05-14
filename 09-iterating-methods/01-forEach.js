const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Carol", age: 32 },
];

users.forEach(line => console.log(`${line.name} (${line.age}) - ${line.age >= 18 ? 'adult' : 'minor'}`));
