---
title: Update
---

```jsx
:Update(data[, where])
```

### Описание
Обновляет данные таблицы.

### Агрументы
|Название |Тип |Описание |
--- | --- | ---
data | `table` | Таблица с новыми данными. Смотри в [Примеры](#examples)
*where* | `string / table` | Фильтрирует что надо изменить. Если таблица, то конвертирует в `key = value`. [Тык сюда](https://www.sqlitetutorial.net/sqlite-where/) чтобы понять.

### Возращает
1. `nil / false` - Если `false`, значит есть ошибка.

### Примеры {#examples}
Сбрасываем деньги у всех игроков на 5000
```lua
t:Update({
    money = 5000
})
```

Обновляем деньги и уровень у игрока
```lua
t:Update({
    money = 13250,
    lvl = 3,
}, { id64 = 'player1' })
-- Или
t:Update({
    money = 13250,
    lvl = 3,
}, "id64 = 'player1'")
```