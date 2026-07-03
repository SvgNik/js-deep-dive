const list = document.querySelector(".list");
const loading = document.querySelector(".loading");
const statusBox = document.querySelector(".status");
const loadPosts = document.querySelector(".load-posts");

let allPosts = [];
let currentPage = 1;

async function loadPage() {
  loading.textContent = "...Загрузка";
  loadPosts.disabled = true;
  statusBox.textContent = "";
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`,
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const newPosts = await response.json();
    if (newPosts.length === 0) {
      statusBox.textContent = "Постов больше нет";
      loadPosts.style.display = "none";
      return;
    }
    allPosts = [...allPosts, ...newPosts];
    render(allPosts);
    currentPage++;
  } catch (error) {
    statusBox.textContent = `Ошибка: ${error.message}`;
  } finally {
    loading.textContent = "";
    loadPosts.disabled = false;
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

loadPosts.addEventListener("click", loadPage);
