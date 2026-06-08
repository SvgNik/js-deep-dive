/* <div class="gallery"></div> */

const gallery = document.querySelector(".gallery");

const paragraph = document.createElement("p");
paragraph.textContent = "Новое фото";
gallery.append(paragraph);

const span = document.createElement("span");
span.textContent = "❤";
gallery.prepend(span);
