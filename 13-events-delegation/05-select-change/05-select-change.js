const select = document.querySelector(".theme");
const paragraph = document.querySelector(".result");

select.addEventListener("change", (event) => {
  const value = event.target.value;
  paragraph.textContent = `Выбрано: ${value}`;
});
