function processArray(arr, action) {
  for (const item of arr) {
    action(item);
  }
}

processArray([1, 2, 3, 4], n => console.log(n * 10));
processArray(["sky", "sea", "sun"], word => console.log(word.toUpperCase()));
processArray([5, 12, 3, 18], number => console.log(number > 10 ? 'big' : 'small'));

//* ----------------------------------------------------

function applyTwice(value, action) {
  action(value);
  action(value);
}

function announce(text) {
  console.log("Announcement: " + text);
}

applyTwice("Server down", announce);
applyTwice(42, n => console.log("Number is " + n));
