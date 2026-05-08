const tags = "JavaScript, Python, Java, TypeScript, PHP";


console.log(tags.indexOf(" "));
console.log(tags.includes('TypeScript'));
console.log(tags.toUpperCase());

let amount = 0;

for (let i = 0; i < tags.length; i++) {
  if (tags[i] === ',') {
  amount ++;
 }
}
console.log(amount);
