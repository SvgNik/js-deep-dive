const userAge = 18;

if (userAge >= 18) {
  console.log('Доступ разрешён');
} else if (userAge >= 16 && userAge <= 17) {
  console.log('Только с сопровождением');
} else {
  console.log('Доступ запрещён');
}
