# 08 · Callbacks и Arrow Functions

## Что изучено
- Функция как значение — можно сохранить, передать, вернуть
- Callback — функция, переданная в другую функцию
- Higher-order function — функция, принимающая функцию как аргумент
- Arrow functions — синтаксис, implicit return
- Normal function vs arrow function

## Что я должен уметь
- Передавать функцию как аргумент без вызова
- Писать анонимные arrow functions прямо в вызове
- Использовать implicit return
- Строить higher-order functions с callback-параметром

## Файлы
- 01-callbacks-basics.js
- 02-callbacks-final.js

## Сложные моменты
- fn vs fn() — fn передаёт функцию, fn() передаёт результат
- item => item * 10 — item это параметр, значение попадает в него в момент вызова

## Notes
- return внутри цикла останавливает функцию после первой итерации
- condition(item) — не нужно писать === true, callback уже возвращает boolean
