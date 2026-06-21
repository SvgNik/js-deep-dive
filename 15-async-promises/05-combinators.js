function succeedAfter(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

function failAfter(ms, reason) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(reason));
    }, ms);
  });
}

Promise.all([
  succeedAfter(300, "Anna"),
  succeedAfter(500, "Boris"),
  succeedAfter(700, "Vera"),
])
  .then((results) => console.log(results))
  .catch((error) => console.log(error.message));

Promise.all([
  succeedAfter(300, "Anna"),
  failAfter(500, "Boris"),
  succeedAfter(700, "Vera"),
])
  .then((results) => console.log(results))
  .catch((error) => console.log(error.message));

Promise.allSettled([
  succeedAfter(300, "Anna"),
  failAfter(500, "Boris"),
  succeedAfter(700, "Vera"),
])
  .then((results) =>
    results.forEach((result) => {
      console.log(result.status);
      console.log(result.value || result.reason.message);
    }),
  )
  .catch((error) => console.log(error.message));

Promise.race([
  succeedAfter(800, "Anna"),
  succeedAfter(1200, "Boris"),
  succeedAfter(400, "Vera"),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
