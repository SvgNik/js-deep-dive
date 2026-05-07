const role = "admin";
const isActive = true;

if (role === "admin" && isActive === true) {
  console.log('Полный доступ');
} else if (role === "user" && isActive === true) {
  console.log('Ограниченный доступ');
} else if (isActive === false){
  console.log('Аккаунт заблокирован');
} else {
  console.log('Неизвестная роль')
}
