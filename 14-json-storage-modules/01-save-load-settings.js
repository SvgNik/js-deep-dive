const settings = { theme: "dark", language: "ru" };

localStorage.setItem("settings", JSON.stringify(settings));
const saved = JSON.parse(localStorage.getItem("settings"));
console.log(saved.theme);
