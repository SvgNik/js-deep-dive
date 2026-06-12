# 13 · Events, forms, delegation

## Что изучено

- addEventListener, объект event, event.target и event.currentTarget
- Типы событий: click, input, change, keydown (+ event.key)
- Формы: submit, чтение input.value, preventDefault
- Bubbling: фазы capture → target → bubble
- Делегирование событий, stopPropagation

## Что я должен уметь

- Вешать обработчики и читать значения полей через .value
- Обрабатывать форму своим JS (preventDefault + валидация)
- Объяснить всплытие и делегирование своими словами
- Написать делегированный обработчик для динамического списка

## Файлы

- 01-rating-widget — click + event.target + dataset
- 02-live-counter — input + value + length
- 03-form-submit — submit + preventDefault
- 04-enter-key — keydown + event.key
- 05-select-change — change на select
- 06-live-filter — input + filter (toLowerCase/includes)
- 07-form-validation — форма с двумя полями + валидация
- 08-todo-delegation — динамический список + делегирование

## Сложные моменты

- Bubbling и делегирование — концептуально сложнее остального в теме
- event.target vs event.currentTarget
- В submit-обработчике e.target = форма; поля читать через свои переменные .value
- NaN: любое сравнение с NaN даёт false (нужен !(age > 0))

## Notes

- tagName возвращает имя тега ЗАГЛАВНЫМИ ("LI")
- dataset и input.value всегда отдают строку → Number() на границе данных
- preventDefault ≠ stopPropagation
