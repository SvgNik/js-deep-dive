fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка, статус: ${response.status}`);
    }
    return response.json();
  })
  .then((user) => console.log(user))
  .catch((error) => console.error(error.message));
