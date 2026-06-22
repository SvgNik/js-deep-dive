function loadAfter(ms, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
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

const users = loadAfter(800, [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Boris", age: 17 },
  { id: 3, name: "Vera", age: 30 },
]);

const orders = loadAfter(1200, [
  { userId: 1, total: 50 },
  { userId: 1, total: 30 },
  { userId: 3, total: 120 },
]);

const promo = failAfter(600, "Промо недоступно");

const intervalId = setInterval(() => {
  console.log("Загрузка дашборда...");
}, 400);

Promise.allSettled([users, orders, promo])
  .then((results) => {
    clearInterval(intervalId);
    results.forEach((result) => {
      if (result.status === "rejected") {
        console.log("Источник недоступен:", result.reason.message);
      }
    });
    const usersData = results[0].value;
    const ordersData = results[1].value;
    const adults = usersData.filter((user) => user.age >= 18);

    adults.forEach((adult) => {
      const userOrders = ordersData.filter(
        (order) => order.userId === adult.id,
      );
      const totalSpent = userOrders.reduce(
        (sum, order) => sum + order.total,
        0,
      );
      console.log(`${adult.name}: потрачено ${totalSpent}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Дашборд готов");
  });
