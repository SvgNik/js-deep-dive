const status = document.querySelector("#status");
const stats = document.querySelector("#stats");
const usersCard = document.querySelector("#usersCard");
const search = document.querySelector("#search");

let allUsers = [];

function renderUsers(list) {
  usersCard.innerHTML = "";
  list.forEach((user) => {
    const card = document.createElement("div");
    const userName = document.createElement("p");
    const email = document.createElement("p");
    const addressCity = document.createElement("p");
    const companyName = document.createElement("p");

    userName.textContent = user.name;
    email.textContent = user.email;
    addressCity.textContent = user.address.city;
    companyName.textContent = user.company.name;
    card.append(userName, email, addressCity, companyName);
    usersCard.append(card);
  });
}

status.textContent = "...Загрузка";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка, статус: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    status.textContent = "";
    allUsers = users;
    renderUsers(allUsers);
  })
  .catch((error) => console.error(error.message));
