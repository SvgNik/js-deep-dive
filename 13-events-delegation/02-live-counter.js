const input = document.querySelector(".message");
const paragraph = document.querySelector(".counter");

input.addEventListener("input", (e) => {
  const length = e.target.value.length;
  let counterText = `Символов: ${length}`;

  if (length > 20) {
    counterText += " (многовато)";
  }

  paragraph.textContent = counterText;
});
