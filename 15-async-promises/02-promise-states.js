function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Доступ разрешён");
    } else {
      reject("Доступ запрещён: меньше 18");
    }
  });
}

checkAge(29)
  .then((value) => {
    console.log("успех:", value);
  })
  .catch((reason) => {
    console.log("ошибка:", reason);
  })
  .finally(() => {
    console.log("Проверка завершена");
  });

checkAge(16)
  .then((value) => {
    console.log("успех:", value);
  })
  .catch((reason) => {
    console.log("ошибка:", reason);
  })
  .finally(() => {
    console.log("Проверка завершена");
  });
