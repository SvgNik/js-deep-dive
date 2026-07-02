async function loadUsers() {
  try {
    console.time("load");
    const [u1, u2, u3] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
        response.json(),
      ),
      fetch("https://jsonplaceholder.typicode.com/users/2").then((response) =>
        response.json(),
      ),
      fetch("https://jsonplaceholder.typicode.com/users/3").then((response) =>
        response.json(),
      ),
    ]);
    console.timeEnd("load");
    console.log(u1.name, u2.name, u3.name);
  } catch (error) {
    console.error(error.message);
  }
}

loadUsers();
