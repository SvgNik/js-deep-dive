const form = document.querySelector(".form");
const input = document.querySelector(".input");
const paragraph = document.querySelector(".error");
const ul = document.querySelector(".list");

const tasks = [
  { id: 1, title: "Доделать задачу" },
  { id: 2, title: "Купить тунец" },
  { id: 3, title: "Проверить бронь" },
];

function render() {
  ul.innerHTML = "";
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.title;
    ul.append(listItem);
  });
}

render();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (value === "") {
    paragraph.textContent = "Введите текст";
    return;
  }
  paragraph.textContent = "";
  tasks.push({ id: Date.now(), title: value });
  input.value = "";
  render();
});
