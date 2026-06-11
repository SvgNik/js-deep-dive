const input = document.querySelector(".search");
const items = document.querySelectorAll(".list li");

input.addEventListener("input", (event) => {
  const userInput = event.target.value.toLowerCase();

  items.forEach((item) => {
    const listItemText = item.textContent.toLowerCase();
    if (listItemText.includes(userInput)) {
      item.hidden = false;
    } else {
      item.hidden = true;
    }
  });
});
