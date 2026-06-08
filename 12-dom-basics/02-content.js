/* <h1 class="page-title">Старый заголовок</h1>
<input id="nickname" value="coder123">
<p class="welcome"></p> */

const title = document.querySelector(".page-title");
title.textContent = "Добро пожаловать";

const input = document.getElementById("nickname");
console.log(input.value);

const paragraph = document.querySelector(".welcome");
paragraph.textContent = `Привет, ${input.value}!`;
