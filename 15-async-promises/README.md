# 15 · Async/Promise

## Что изучено

- Sync vs async: синхронный код выполняется весь сразу, колбэки уходят в очередь
- Таймеры: `setTimeout`/`clearTimeout`, `setInterval`/`clearInterval` (отмена по id)
- `Promise`: три состояния `pending → fulfilled / rejected`, переход необратим
- `resolve(value)` / `reject(new Error(reason))` — успех/провал промиса
- `then` / `catch` / `finally` — обработка успеха, ошибки и завершения в любом исходе
- Цепочки: `return` течёт вниз в следующий `.then`; `throw` прыгает в `.catch`
- Комбинаторы: `Promise.all`, `Promise.allSettled`, `Promise.race`

## Что должен уметь

- Создать промис с отложенным `resolve` (через `setTimeout`) и обработать оба исхода
- Строить цепочки `.then`, передавать значение вниз, ловить ошибки в `.catch`
- Грузить несколько источников параллельно и оставаться устойчивым к падению одного (`allSettled`)
- Соединять два массива по общему id (`filter` по `userId === id`) и считать суммы через `reduce`

## Файлы

- `01-timer-control.js` — setTimeout/clearTimeout, sync раньше async
- `02-promise-states.js` — new Promise + then/catch/finally
- `03-promise-chain.js` — return течёт вниз, throw → catch
- `04-loading-users.js` — отложенный resolve + setInterval/clearInterval + filter
- `05-combinators.js` — all / allSettled / race
- `06-final-dashboard.js` — параллельная загрузка + allSettled + join orders↔users + filter/reduce

## Сложные моменты

- Роль параметра в `new Promise((resolve, reject) => ...)` определяет **позиция, а не имя**
- `reject` нужно вызывать через `new Error(...)` — даёт `.message`, `.stack` и единый формат с `throw`/`fetch`; голая строка ломает `error.message`
- `Promise.race` отдаёт **первого завершившегося** (settled), а не первого успешного
- Порядок вывода в консоли = порядок **завершения** промисов, а не порядок в коде
- `.then` после `allSettled` получает массив `{ status, value/reason }` — данные успешных лежат в `.value`

## Notes

- `reduce` всегда с начальным значением (`, 0`) — на пустом массиве без него `TypeError`
- Колбэк в `forEach`/`then` пишется в теле `{}`, а не передаётся как аргумент-вызов
- Отложенное значение через `setTimeout` — это каркас под реальный `fetch` (JS 16)
