const day = 'Sunday';

switch (day) {
  case 'Monday':
    console.log('Рабочий день')
    break;
  case 'Tuesday':
    console.log('Рабочий день')
    break;
  case 'Wednesday':
    console.log('Рабочий день')
    break;
  case 'Thursday':
    console.log('Рабочий день')
    break;
  case 'Friday':
    console.log('Рабочий день')
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Выходной')
    break;

  default:
    console.log('Неизвестный день')
    break;
}
