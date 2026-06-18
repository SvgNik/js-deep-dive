# review-combined · Мостик к Mini-project #1

## Что отрабатывали

Беглость СБОРКИ кода из изученного (M1A), пробитие барьера пустого холста.

## Задачи

- 01-names — DOM + events + массив + JSON + localStorage
- 02-delete-delegation — делегирование, источник правды, filter
- 03-todo-toggle — find, !done, условный класс, guard
- 04-filter-search — query, filter (вид ≠ данные), input
- 05-reduce-count — reduce-счётчик, два вида из одного источника
- 06-form-validation — submit, preventDefault, валидация, push, id

## Ключевые паттерны

- Источник правды: массив → render → DOM
- define ≠ call; «когда код выполняется» (верхний уровень vs обработчик)
- Вид ≠ данные (filter не мутирует) vs источник растёт (push)
- Guard-паттерн; find → ссылка на объект в массиве

## Сложные моменты

- «не та переменная» / внимательность к символам (!== vs = !, length vs length())
- placement счётчика/render внутри функции, а не на верхнем уровне
