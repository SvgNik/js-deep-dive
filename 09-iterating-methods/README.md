# 09 · Array Iteration Methods

## Что изучено
- forEach — side effect, возвращает undefined
- map — трансформация, новый массив той же длины
- filter — отбор по условию, новый массив ≤ длины
- find / findIndex — поиск элемента / индекса, досрочная остановка
- some / every — проверки «хоть один» / «все», возвращают boolean
- flatMap — map + разворот вложенности на один уровень
- toSorted / toReversed — immutable-версии sort / reverse (теория)
- reduce — сворачивание массива в одно значение (число, объект, группировка)
- chaining — filter → map → reduce конвейером

## Что должен уметь
- выбрать правильный метод под задачу (map vs filter vs find vs reduce)
- сказать, что возвращает каждый метод
- написать reduce: acc, начальное значение, обязательный return
- собрать счётчик и группировку через reduce (acc как объект)
- строить цепочки методов
- помнить, что мутирует, а что нет (sort vs toSorted)

## Файлы
- 01-forEach.js
- 02-map.js
- 03-filter.js
- 04-map-filter.js
- 05-reduce-sum.js
- 06-reduce-count.js
- 07-reduce-group.js
- 08-chaining.js
- 09-final-task.js

## Сложные моменты
- reduce: acc и n — параметры callback, заполняет их reduce; первый параметр = аккумулятор (важна позиция, не имя)
- argument vs parameter: аргумент при вызове, параметр при написании; я кормлю reduce (callback + начальное значение), reduce кормит callback (acc + элемент)
- в объектном reduce `return acc` идёт отдельной строкой (объект меняю на месте, потом отдаю целиком)
- findIndex проверять через `!== -1` (0 — falsy, -1 — truthy)
- reduce на `[]` без начального значения = TypeError, а не undefined

## Notes
- параметр функции — по содержимому, функция — по действию
- bracket notation для динамического ключа, точка для известного поля
- filter ставить перед map — меньше работы
