const form = document.querySelector(".greet-form");
const input = document.querySelector(".name");
const paragraph = document.querySelector(".message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = input.value.trim();

  if (name === "") {
    paragraph.textContent = "Введите имя";
  } else {
    paragraph.textContent = `Привет, ${name}!`;
    form.reset();
  }


});
