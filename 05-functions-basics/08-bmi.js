function calculateBMI(weight, height) {
  return `Вес:${weight}кг, Рост:${height}м, BMI:${(weight / (height * height)).toFixed(2)}`
}
console.log(calculateBMI(80, 1.80));
console.log(calculateBMI(67, 1.74));
console.log(calculateBMI(94, 1.92));
