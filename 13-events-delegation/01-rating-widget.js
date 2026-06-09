const buttons = document.querySelectorAll(".star");
const result = document.querySelector(".rating-result")

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const value = Number(event.target.dataset.value);
    result.textContent = `Оценка: ${value} из 5`;
  })
});
