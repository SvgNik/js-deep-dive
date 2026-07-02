async function loadUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const user = await response.json();
    console.log(user.name);
    console.log(user.email);
  } catch (error) {
    console.error(`Ошибка, ${error.message}`);
  }
}

loadUser();
