# 17 · Async/Await and Pagination

## Что изучено

- async/await как синтаксис поверх Promise
- await ставит функцию на паузу до результата
- try/catch/finally: сетевые vs HTTP-ошибки, response.ok
- Promise.all (параллельно) vs последовательный await (зависимые запросы)
- Пагинация: load more (накопление) vs page navigation (замена)
- 4 состояния UI: loading / error / empty / success

## Что должен уметь

- Писать fetch на чистом await с обработкой ошибок в DOM
- Отличать накопление от замены данных
- Реализовать load more и page navigation
- Управлять состоянием между кликами (scope снаружи функции)

## Файлы

- 01-then-to-await.js — конвертация .then → await
- 02-fetch-error-handling.js — try/catch + response.ok
- 03-parallel-requests.js — Promise.all
- 04-sequential-dependent.js — user → posts по userId
- 05-single-page-pagination.js — \_page/\_limit
- 06-load-more.js — накопление allPosts + DOM
- 07-page-navigation.js — замена + guard пустой страницы
- 08-final-task.js — сборка: 4 состояния + load more

## Сложные моменты

- await = пауза функции (не "функция становится промисом") — добить в M1B
- [] === [] → false (сравнение по ссылке) — M1B value vs reference
- finally для снятия loading при любом исходе
- scope состояния снаружи функции (иначе сброс при каждом клике)
