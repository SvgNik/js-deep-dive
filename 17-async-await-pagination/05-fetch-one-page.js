async function fetchPage(page) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
    );
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    const posts = await response.json();
    console.log(page, posts);
  } catch (error) {
    console.error(error.message);
  }
}

fetchPage(1);
fetchPage(2);
