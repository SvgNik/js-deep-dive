/* <input id="product" value="Кофе">
<ul class="cart">
  <li class="item">Чай</li>
</ul> */

const product = document.getElementById("product");
const cart = document.querySelector(".cart");
const item = document.querySelector(".item");

const li = document.createElement("li");
li.textContent = product.value;
li.setAttribute("class", "item");
li.setAttribute("data-added", "true");

cart.append(li);

item.remove();
