const list = document.querySelector(".list");
const loadMore = document.querySelector(".loadMore");

let allPosts = [];
let currentPage = 1;

async function loadPage() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`,
    );
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    const newPosts = await response.json();
    allPosts = [...allPosts, ...newPosts];
    render(allPosts);
    currentPage++;
  } catch (error) {
    console.error(error.message);
  }
}

loadPage();

function render(posts) {
  list.innerHTML = "";
  posts.forEach((post) => {
    const item = document.createElement("li");
    item.textContent = post.title;
    list.append(item);
  });
}

loadMore.addEventListener("click", loadPage);
