const form = document.querySelector(".add-form");
const input = document.querySelector(".new-input");
const ul = document.querySelector(".name-list");

let names = [];
function render() {
  ul.innerHTML = "";
  names.forEach((name) => {
    const newElement = document.createElement("li");
    newElement.textContent = name;
    ul.append(newElement);
  });
}

const saved = JSON.parse(localStorage.getItem("names"));
if (saved !== null) {
  names = saved;
}
render();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue === "") return;
  names.push(inputValue);
  render();
  localStorage.setItem("names", JSON.stringify(names));
  input.value = "";
});
