const status = document.querySelector("#status");
const stats = document.querySelector("#stats");
const usersCard = document.querySelector("#usersCard");
const search = document.querySelector("#search");

let allUsers = [];

function renderUsers(list) {
  usersCard.innerHTML = "";
  if (list.length === 0) {
    usersCard.textContent = "Ничего не найдено";
    return;
  }
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

function renderStats(list) {
  const counts = list.reduce((acc, user) => {
    const letter = user.name[0].toUpperCase();
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});
  const text = Object.entries(counts)
    .map(([letter, count]) => `${letter}: ${count}`)
    .join(", ");
  stats.textContent = text;
}

status.textContent = "...Загрузка";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`статус: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    status.textContent = "";
    allUsers = users;
    renderUsers(allUsers);
    renderStats(allUsers);
  })
  .catch((error) => {
    status.textContent = `Ошибка: ${error.message}`;
    console.error(error);
  });

search.addEventListener("input", (event) => {
  const userInput = event.target.value.toLowerCase();
  const filtered = allUsers.filter((user) => {
    const userNameLower = user.name.toLowerCase();
    return userNameLower.includes(userInput);
  });
  renderUsers(filtered);
});
