/* <input id="tag" value="urgent">
<div class="badges">
  <span class="badge">old</span>
</div> */

const input = document.getElementById("tag");
const span = document.querySelector(".badge");
const badges = document.querySelector(".badges");

const newSpan = document.createElement("span");
newSpan.textContent = input.value;
newSpan.setAttribute("class", "badge");
newSpan.setAttribute("data-priority", "high");

badges.prepend(newSpan);

span.remove();
