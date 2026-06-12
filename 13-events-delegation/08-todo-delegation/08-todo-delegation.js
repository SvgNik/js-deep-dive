const form = document.querySelector(".add-form");
const input = document.querySelector(".task-input");
const ul = document.querySelector(".task-list");

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();

  if (inputValue === "") return;

  const newElement = document.createElement("li");
  newElement.textContent = inputValue;
  ul.append(newElement);
  input.value = "";
});
