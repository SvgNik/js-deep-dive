# 12 · DOM basics

## Что изучено
- DOM как дерево объектов в памяти браузера; отличие от HTML (текст)
- node vs element: каждый element — node, но не каждый node — element (text/comment nodes)
- Поиск элементов: getElementById (по id, без #), querySelector (первый по CSS-селектору),
  querySelectorAll (список/NodeList); вложенный селектор через пробел ("#menu a")
- Содержимое: textContent (текст, безопасно), innerHTML (парсит теги, XSS-риск),
  value (значение полей input/textarea/select)
- Attributes vs properties: атрибут — в HTML (строка), property — актуальное состояние;
  getAttribute / setAttribute / removeAttribute / hasAttribute
- dataset: свои data-* атрибуты; чтение через camelCase (dataset.productId);
  значение всегда строка → Number() для чисел
- Создание/удаление: createElement (без < >), append (в конец), prepend (в начало),
  remove() (со скобками)

## Что должен уметь
- Найти любой элемент правильным методом и селектором
- Прочитать и изменить текст/значение элемента
- Читать и задавать атрибуты, включая data-*
- Создать элемент, наполнить и вставить в нужное место
- Удалить элемент

## Файлы
- 01-find-elements.js — поиск элементов (id / класс / вложенный селектор)
- 02-content.js — чтение value → запись в textContent
- 03-create-elements.js — createElement / append / prepend
- 04-final-task.js — рендер товара в корзину (поиск + create + data + remove)
- 05-practice-task.js — замена бейджа (закрепляющая)

## Сложные моменты
- Точка у класса в селекторе: ".card", не "card" (повторялось несколько раз — внимательность)
- getElementById — БЕЗ #, querySelector — С # (легко смешать)
- Инверсия textContent / innerHTML и append / prepend
- Путаница "элемент vs значение": input (элемент) vs input.value (значение);
  в append/prepend передавать НУЖНУЮ переменную (новый элемент, не контейнер/старый)
- setAttribute("имя", "значение") — порядок аргументов
- data-атрибут: запись "data-added", чтение dataset.added

## Notes
- createElement создаёт элемент "в воздухе"; пока не append/prepend — на странице его нет
- VS Code иногда подсовывает авто-импорт (require("react")) — для DOM не нужен, удалять
