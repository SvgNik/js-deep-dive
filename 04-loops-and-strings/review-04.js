const vowels = "aeiou";

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
     count++;
    }
  }
  return count;
}

console.log(countVowels('qwrwetqwetwercvshw'));
console.log(countVowels('AAAAAAAFDSFWEEEEGGWT'));
console.log(countVowels('IF I PLAY I WIN, I AM 34, BACK'));
