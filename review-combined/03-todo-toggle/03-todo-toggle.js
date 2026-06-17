const ul = document.querySelector(".list");

const tasks = [
  { id: 1, title: "Выгулять рекса", done: false },
  { id: 2, title: "Начать писать код", done: true },
  { id: 3, title: "Сходить в магазин", done: false },
  { id: 4, title: "Сходить в зал", done: false },
];

function render() {
  ul.innerHTML = "";
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.title;
    listItem.dataset.id = task.id;
    if (task.done === true) {
      listItem.classList.add("done");
    }
    ul.append(listItem);
  });
}

render();
ul.addEventListener("click", (event) => {
  const clickedItem = event.target;
  if (!clickedItem.dataset.id) return;
  const id = Number(clickedItem.dataset.id);
  const foundTask = tasks.find((task) => task.id === id);
  foundTask.done = !foundTask.done;
  render();
});
