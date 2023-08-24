---
title: Select
---

```jsx
:Select(collumns[, where])
```

### Описание
Получает список данных из таблицы.

Для получения первых данных, используй [**SelectOne**](selectone)

### Агрументы
|Название |Тип |Описание |
--- | --- | ---
collumns | `string / table` | Столбцы которые нужно получить. Если `nil`, то `*`. Если список `{'id64', 'money'}`, конвертирует в строку `id64, money`
*where* | `string / table` | Фильтрирует результат. Если таблица, то конвертирует в `key = value`. [Тык сюда](https://www.sqlitetutorial.net/sqlite-where/) чтобы понять.

### Возращает
1. `nil / false / table` - Возращается список данных. `false` возвращается, если есть ошибка. `nil`, если запрос не вернул данных. 

### Примеры
Получаем из таблицы все данные
```lua
local data = t:Select()
```

Получаем из таблицы только `id64` и `money`
```lua
local data = t:Select({'id64', 'money'})
-- Или
local data = t:Select('id64, money')
```

Получаем `money` только игрока с `id64` равным `my_id`
```lua
local data t:Select('money', {id64 = 'my_id'})
-- Или
local data t:Select('money', "id64 = 'my_id'")
```