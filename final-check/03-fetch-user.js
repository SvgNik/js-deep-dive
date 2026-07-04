async function getUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(`Ошибка: ${error.message}`);
  }
}

async function run() {
  const user = await getUser(1);
  console.log(user);

  const missing = await getUser(99999);
  console.log(missing);
}

run();
