const grades = [72, 45, 91, 38, 67, 85, 55, 90];

console.log(grades[0]);
console.log(grades[grades.length - 1]);

grades.push(78);

const firstGrade = grades.shift();
console.log(`Dropped: <${firstGrade}>`);

console.log(grades.indexOf(85));

let total = 0;
for (const grade of grades) {
  total += grade;
}
console.log(`Total: ${total}`);

for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 70) {
    console.log(`[${i}] ${grades[i]}`);
  }
}

grades.sort(function (a, b) {
  return b - a;
});

console.log(grades);
