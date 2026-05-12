# 06 · Arrays Basics

## Что изучено
- Создание массивов, индексы, length
- Мутирующие методы: push, pop, shift, unshift, splice, reverse, sort
- Немутирующие методы: slice, concat, indexOf, includes, join
- Перебор через for и for...of
- Разница между мутирующими и немутирующими методами

## Что должен уметь
- Добавлять и удалять элементы с начала и конца массива
- Вырезать часть массива через slice без изменения оригинала
- Вставлять и удалять элементы по индексу через splice
- Искать элементы через indexOf и includes
- Объединять массивы через concat
- Сортировать числа с comparator
- Перебирать массив через for (когда нужен индекс) и for...of

## Файлы
- 01-array-basics.js — создание, индексы, push, shift
- 02-array-search.js — indexOf, includes, for...of
- 03-array-slice-splice.js — slice, splice
- 04-array-methods.js — concat, join, reverse
- 05-array-sort.js — sort с comparator
- 06-final.js — финальная задача

## Сложные моменты
- for vs for...of — когда использовать каждый
- Comparator в sort: a - b для возрастания, b - a для убывания
- Мутирующие методы меняют оригинал — важно помнить при работе с данными

## Notes
- reverse и sort — мутирующие, хотя выглядят как "просмотр"
- shift(0) не имеет смысла — shift не принимает аргументов
- indexOf возвращает -1 если элемент не найден
