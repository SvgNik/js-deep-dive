// function loadUser() {
//   return fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((user) => {
//       console.log(user.name);
//       console.log(user.email);
//     });
// }

async function loadUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  console.log(user.name);
  console.log(user.email);
}

loadUser();
