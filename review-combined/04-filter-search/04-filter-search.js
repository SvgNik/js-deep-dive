const input = document.querySelector(".search");
const ul = document.querySelector(".list");

const movies = [
  { id: 1, title: "Batman" },
  { id: 2, title: "Spiderman" },
  { id: 3, title: "Flash" },
  { id: 4, title: "Hulk" },
];

let query = "";

function render() {
  ul.innerHTML = "";
  const visible = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query),
  );
  visible.forEach((movie) => {
    const listItem = document.createElement("li");
    listItem.textContent = movie.title;
    ul.append(listItem);
  });
}

render();

input.addEventListener("input", (event) => {
  query = event.target.value.toLowerCase();
  render();
});
