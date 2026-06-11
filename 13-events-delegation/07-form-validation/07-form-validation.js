const form = document.querySelector(".signup");
const inputName = document.querySelector(".username");
const inputAge = document.querySelector(".age");
const paragraph = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = inputName.value.trim();
  const userAge = Number(inputAge.value);
  if (userName === "") {
    paragraph.textContent = "Введите имя";
  } else if (!(userAge > 0)) {
    paragraph.textContent = "Введите корректный возраст";
  } else {
    paragraph.textContent = `Регистрация: ${userName}, ${userAge} лет`;
    form.reset();
  }
});
