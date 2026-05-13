const user = {
  name: 'Nik',
  age: 26,
  city: 'Kyiv',
  isPremium: true,

  greet() {
    return `Hello, my name is ${user.name}`
  },
};

user.age = 24;
user.email = 'nikolay123@example.com';
delete user.isPremium;

console.log(user.greet());

console.log(Object.keys(user));
console.log(Object.values(user));

for (const key in user) {
  console.log(key + ":", user[key]);
}
