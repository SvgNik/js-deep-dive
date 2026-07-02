async function loadUserWithPosts() {
  try {
    const user = await fetch(
      "https://jsonplaceholder.typicode.com/users/3",
    ).then((r) => {
      if (!r.ok) {
        throw new Error(`Ошибка: ${r.status}`);
      }
      return r.json();
    });
    const userPosts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    ).then((r) => {
      if (!r.ok) {
        throw new Error(`Ошибка: ${r.status}`);
      }
      return r.json();
    });
    console.log(user.name, userPosts.length);
  } catch (error) {
    console.error(error.message);
  }
}

loadUserWithPosts();
