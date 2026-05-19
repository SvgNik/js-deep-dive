function repeat(n, action) {
  for (let i = 1; i <= n; i++) {
    action();
  }
}

function tick() {
  console.log('Tick');
}

repeat(5, tick);
repeat(3, function () {
  console.log('Boom');
});
repeat(2, () => console.log('Hello'));
