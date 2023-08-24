---
title: Collumn
---

```jsx
RF.SQLite.Collumn(name, type[, default_value, not_null, unique, primary_key])
```

### Описание
Функция для создание таблицы которая содержит информацию о столбце.

Используется в функции [**CreateTable**](createtable) в качестве данных о столбцах

### Агрументы
|Название |Тип |Описание |
--- | --- | ---
name | `string` | Название столбца
type | `string` | [Тип данных sqlite](https://www.sqlite.org/datatype3.html)
*default_value* | `any` | Значение по умолчанию. `DEFAULT <value>`
*not_null* | `bool` | Запрещает использование `NULL` в качестве значения. `NOT NULL`
*unique* | `bool` | Должно ли значение быть уникальным. `UNIQUE`
*primary_key* | `bool` | Основной ключ? `PRIMARY KEY`

### Возращает
1. `table` - Таблица которая содержит веденные данные.

### Примеры
Создаем таблицу `player_money` с столбцами `id64` и `money`
```lua
local t = RF.SQLite.CreateTable('player_money', {
    RF.SQLite.Collumn('id64', 'TEXT', nil, true, true), -- id64 TEXT NOT NULL UNIQUE
    RF.SQLite.Collumn('money', 'INTEGER', 5000),        -- money INTEGER DEFAULT 5000
})
```