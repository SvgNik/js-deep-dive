const cities = ['Kyiv', 'Lviv', 'Odessa', 'Dnipro'];
console.log(cities[0]);
console.log(cities[cities.length - 1]);

cities.push('Kharkiv');

const removed = cities.shift();
console.log(`Removed: <${removed}>`);

console.log(cities);
console.log(cities.length);
