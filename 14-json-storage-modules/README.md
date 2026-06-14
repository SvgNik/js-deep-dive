# 14 · JSON / storage / modules / Vite

## Что изучено

- JSON как текстовый формат; JSON.stringify / JSON.parse
- localStorage / sessionStorage: setItem, getItem, removeItem, clear
- хранилище работает только со строками; getItem на пустом ключе → null
- local переживает закрытие вкладки, session — только пока вкладка открыта
- ES Modules: export / import, named vs default
- путь импорта: ./ и .js обязательны в голом браузере (.js опционален в Vite)
- Vite basics: npm create vite, npm run dev / build, HMR

## Что должен уметь

- сохранять и читать объект через связку JSON + localStorage
- объяснить, зачем нужны stringify и parse
- разнести код на модули и импортировать функции между файлами
- объяснить, почему функция, отдающая значение, обязана иметь return
- обработать отсутствие данных (null) до обращения к свойству

## Файлы

- 01-save-load-settings/ — save/load объекта через JSON + localStorage
- 02-storage/ — модуль storage с named exports + main
- 03-vite-storage/ — первый Vite-проект, модули в src/
- 04-final-settings/ — settings manager: save / update / load + обработка null

## Сложные моменты

- модули — новый механизм; ключ: export там, где функция создана; import там, где используется
- return: без него функция возвращает undefined; getItem на пустом ключе → null

## Notes

- "[object Object]" в хранилище = забыл JSON.stringify
- node_modules не коммитим — восстанавливается из package.json через npm install
