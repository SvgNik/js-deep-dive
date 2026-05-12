const user = {
  name: 'Nik',
  age: 25,
  city: 'Kiyv',
  isPremium: true,

  greet: function () {
    return `Hello, my name is ${user.name}`
  }
};

console.log(user.greet());

console.log(Object.keys(user));
console.log(Object.values(user));

for (const key in user) {
  console.log(key, user[key]);
}
