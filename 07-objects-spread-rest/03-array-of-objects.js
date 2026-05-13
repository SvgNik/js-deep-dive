const students = [
  { name: 'Nik', grade: 8, passed: true },
  { name: 'Alice', grade: 4, passed: false },
  { name: 'Martin', grade: 7, passed: true },
]

console.log(students[0].name);
console.log(students[2].grade);

for (const student of students) {
  console.log(student.name + ":", 'grade ' + student.grade);
}

let total = 0;

for (const student of students) {
  total += student.grade;
}

console.log(total);
