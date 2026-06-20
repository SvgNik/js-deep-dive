function loadUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Anna", age: 25 },
        { name: "Boris", age: 17 },
        { name: "Vera", age: 30 },
      ]);
    }, 1500);
  });
}

const intervalId = setInterval(() => {
  console.log("Загрузка...");
}, 500);

loadUsers()
  .then((users) => {
    clearInterval(intervalId);
    const adults = users.filter((user) => user.age >= 18);
    adults.forEach((user) => console.log(user.name));
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Готово");
  });
