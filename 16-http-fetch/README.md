# 16 · HTTP and fetch

## Что изучено

- Модель client → server → response: браузер (client) шлёт request, network несёт, server отвечает
- Request = method + URL + headers + body; response = status code + headers + body
- HTTP-методы: GET / POST / PUT / PATCH / DELETE; REST-идея (один URL + метод = действие)
- safe / idempotent; почему повторный POST плодит дубли
- Status codes: 2xx успех, 3xx redirect, 4xx ошибка клиента, 5xx ошибка сервера
- response.ok (boolean, true только при 2xx) и response.status
- Headers, Content-Type (формат body того сообщения, где он стоит)
- fetch: базовый GET, response.json(), обработка ошибок
- Ловушка fetch: 404/500 = fulfilled, не rejected → проверка response.ok вручную + throw
- Unwrapping: вернул Promise из .then → цепочка ждёт и разворачивает, следующий .then получает результат
- Две категории ошибок в .catch: сетевая (не дошёл) и HTTP/плохой статус (сервер ответил 4xx/5xx)
- Четыре состояния экрана с данными: loading / error / empty / success

## Что должен уметь

- Сделать GET-запрос через fetch и достать данные через response.json()
- Проверить response.ok и бросить ошибку на плохой статус (throw new Error)
- Обработать ошибку в .catch и показать её пользователю в UI, не только в консоль
- Отрендерить данные с API в DOM (createElement / append)
- Сохранить данные в source of truth и фильтровать локально, без повторных запросов
- Посчитать статистику через reduce и вывести (Object.entries → map → join)
- Обработать все четыре состояния (loading / error / empty / success)
- Объяснить, почему fetch возвращает Promise и почему нужно два .then

## Файлы

- 01-first-fetch/ — первый GET, response.json(), вывод в консоль
- 02-fetch-error-handling/ — проверка response.ok + throw, тест на живом 404
- 03-users-dashboard/ — сквозная: fetch + DOM + filter/reduce + 4 состояния

## Сложные моменты

- response — это «конверт» (status/headers/body внутри), а не данные; body достаём через response.json()
- response.json() сам возвращает Promise → нужен второй .then
- 404/500 не попадают в .catch автоматически — fetch считает доставку успехом
- В .catch недоступен response (scope) — статус передаётся только через текст Error
- Параметр функции = гибкость (renderUsers(list) рисует что дали); жёсткая переменная внутри = функция умеет одно
- filter отбирает (внутри, по одному), рендер — снаружи, по готовому результату, один раз

## Notes

- API: JSONPlaceholder (https://jsonplaceholder.typicode.com)
- Запуск: Live Server (браузер), fetch требует реального запроса
