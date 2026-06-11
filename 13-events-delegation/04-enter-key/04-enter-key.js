const input = document.querySelector(".command");
const paragraph = document.querySelector(".output");

input.addEventListener('keydown', (e) => {

  if (e.key === "Enter") {
    const text = e.target.value;
    paragraph.textContent = `Вы ввели: ${text}!`
  }
});
