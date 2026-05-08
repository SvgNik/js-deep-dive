for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i)
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
  if (sum > 50) break;
  console.log(i);
}
