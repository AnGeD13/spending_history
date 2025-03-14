# Приложение для просмотра операций по лицевому счету

## Стек
 - React
 - JavaScript
 - Vite
 - SCSS
 - json-server

## Установка зависимостей
```npm install```

## Развёртывание
1. Сначала запустите сервер:  ```npm run server```. Он будет доступен по адресу ```http://localhost:3000/transactions```.
2. Затем, не выключая сервер, запустите само приложение: ```npm run dev```. Оно будет работать по адресу ```http://localhost:5173/```

## Структура проекта
 - папка **assets** создана для изображений
 - **components** содержит различные компоненты: фильтры, таблица, пагинация, изменение темы приложения, иконки
 - **data** - в этой папке хранятся константы
 - **fonts** хранит шрифты
 - внутри **server** находится файл ```transactions.json```, откуда json-server берет данные
 - базовые стили хранятся в **styles**
 - в **utils** можно найти различные функции 

## Особенности
 - /App/App.jsx - точка входа.
  - данные, которые приходят с сервера, поступают в ```/utils/groupingAndSortData.js```. Там же они и обрабатываются, т.е. группируются по дням.
  - в ```transactions.json``` есть данные только за июнь - декабрь 2024 года. Для транзакций, которые не удовлетворяют никаким условиям (дата, сумма операции) в таблице выводится фраза "Ничего не найдено". 
 - чекбоксы в секции "Тип операции", выбор даты, пагинация и изменение порядка дат (стрелочка-треугольник в таблице) срабатывают _при клике_. Выбор суммы операции срабатывает _после снятия фокуса_ с поля ввода.
 - переключатель темы находится в правом верхнем углу. При первом посещении активна системная тема, при повторном открытии вкладки/браузера  остаётся выбранная тема.