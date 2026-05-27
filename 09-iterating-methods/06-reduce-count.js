function countItems(items) {
  return items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

console.log(countItems(["win", "loss", "win", "win", "loss"]));
console.log(countItems(["win", "win", "win", "win", "loss", "loss"]));
console.log(countItems([]));
