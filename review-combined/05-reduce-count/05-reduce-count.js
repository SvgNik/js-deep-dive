const paragraph = document.querySelector(".counter");
const ul = document.querySelector(".list");

const tasks = [
  { id: 1, title: "Выгулять Рекса", done: false },
  { id: 2, title: "Начать писать код", done: true },
  { id: 3, title: "Сходить в магазин", done: true },
  { id: 4, title: "Сходить в зал", done: false },
  { id: 5, title: "Заняться рабочими вопросами", done: false },
  { id: 6, title: "Позвонить родным", done: false },
  { id: 7, title: "Закончить модуль", done: false },
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
  const completed = tasks.reduce((acc, task) => {
    return acc + (task.done ? 1 : 0);
  }, 0);
  const total = tasks.length;
  paragraph.textContent = `Выполнено: ${completed} из ${total}`;
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
