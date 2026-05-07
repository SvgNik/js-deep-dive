const userName = 'alice';
const password = '12345';

if (userName.length >= 1 && password.length > 5) {
  console.log('Вход выполнен')
} else if (userName.length >= 1 && password.length <= 5) {
  console.log('Пароль слишком короткий')
} else {
  console.log('Введите имя пользователя')
}
