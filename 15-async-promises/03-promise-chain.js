function processOrder(amount) {
  return new Promise((resolve, reject) => {
    resolve(amount);
  });
}

processOrder(230)
  .then((value) => {
    if (value <= 0) {
      throw new Error("Сумма должна быть больше 0");
    } else {
      return value;
    }
  })
  .then((value) => {
    return value * 0.9;
  })
  .then((value) => {
    return value + 5;
  })
  .then((value) => {
    console.log("Итого к оплате:", value);
  })
  .catch((error) => {
    console.log("Ошибка:", error.message);
  })
  .finally(() => {
    console.log("Обработка заказа завершена");
  });

processOrder(-200)
  .then((value) => {
    if (value <= 0) {
      throw new Error("Сумма должна быть больше 0");
    } else {
      return value;
    }
  })
  .then((value) => {
    return value * 0.9;
  })
  .then((value) => {
    return value + 5;
  })
  .then((value) => {
    console.log("Итого к оплате:", value);
  })
  .catch((error) => {
    console.log("Ошибка:", error.message);
  })
  .finally(() => {
    console.log("Обработка заказа завершена");
  });
