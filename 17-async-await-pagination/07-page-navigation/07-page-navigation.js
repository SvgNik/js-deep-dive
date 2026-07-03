const list = document.querySelector(".list");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
const pageInfo = document.querySelector(".page-info");

let currentPage = 1;

async function loadPage() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`,
    );
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    const posts = await response.json();
    if (posts.length === 0) {
      currentPage--;
      return;
    }
    render(posts);
    pageInfo.textContent = currentPage;
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

forward.addEventListener("click", () => {
  currentPage++;
  loadPage();
});

back.addEventListener("click", () => {
  if (currentPage <= 1) return;
  currentPage--;
  loadPage();
});
