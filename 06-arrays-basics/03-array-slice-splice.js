const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const middleColors = colors.slice(1, 4);
console.log(middleColors);
console.log(colors);

colors.splice(3, 1);
console.log(colors);

colors.splice(3, 0, 'orange');
console.log(colors);
