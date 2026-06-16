const ul = document.querySelector(".list");
let tasks = [
  { id: 1, title: "Доделать задачу" },
  { id: 2, title: "Сходить в магазин" },
  { id: 3, title: "Приготовить обед" },
  { id: 4, title: "Приступить к работе" },
];

function render() {
  ul.innerHTML = "";
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    listItem.textContent = task.title;
    deleteBtn.textContent = "Удалить";
    deleteBtn.dataset.id = task.id;
    listItem.append(deleteBtn);
    ul.append(listItem);
  });
}

render();

ul.addEventListener("click", (event) => {
  const btn = event.target;
  if (!btn.dataset.id) return;
  const id = Number(btn.dataset.id);
  tasks = tasks.filter((task) => task.id !== id);
  render();
});
