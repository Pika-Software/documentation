---
title: CreateTable
---

```jsx
RF.SQLite.CreateTable(name, collumns[, other_options])
```

### Описание
Создает таблицу в sqlite. Также автоматом мигрирует таблицу если надо.

### Агрументы
|Название |Тип |Описание |
--- | --- | ---
name | `string` | Название таблицы
collumns | `table` | Список столбцов. Смотри функцию [**Collumn**](collumn)
*other_options* | `string` | Дополнительная строка sql в создании таблицы. `CREATE TABLE <name> (<collumns>, <other_options>)`

### Возращает
1. [`DBTable`](../db-table/intro) - Класс таблицы датабазы. Нужен для удобного взаймодействия с таблицей.

### Примеры
Создаем таблицу `player_money` с столбцами `id64` и `money`
```lua
local t = RF.SQLite.CreateTable('player_money', {
    RF.SQLite.Collumn('id64', 'TEXT', nil, true, true), -- id64 TEXT NOT NULL UNIQUE
    RF.SQLite.Collumn('money', 'INTEGER', 5000),        -- money INTEGER DEFAULT 5000
})
```