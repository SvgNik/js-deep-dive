const { act } = require("react");

function runOnce(action) {
  action();
}

function sayMorning () {
  console.log("Good morning!");
}

function sayEvening() {
  console.log("Good evening!");
}

runOnce(sayMorning);
runOnce(sayEvening);

// * action(number) — вызываю callback и передаю ему аргумент
function applyToNumber(number, action) {
 console.log(action(number));
}

function double(n) {
  return n * 2;
}

function square(n) {
  return n ** 2;
}

applyToNumber(3, double);
applyToNumber(3, square);
applyToNumber(5, double);
applyToNumber(5, square);

function applyAndLog(value, action) {
  console.log(action(value));
}

applyAndLog(10, n => n *2);
applyAndLog("hello", str => str.toUpperCase());
applyAndLog(7, eNumber => eNumber % 2 === 0);

function transformAll(arr, action) {
  for (const item of arr) {
    console.log(action(item));
  }
}

transformAll([1, 2, 3], item => item * 10);
transformAll(["a", "b", "c"], item => item.toUpperCase());
transformAll([5, 6, 7], item => item % 2 === 0);
