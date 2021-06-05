---
title: DownloadFile
---

```jsx
myhttp.DownloadFile(url, fileName, gamePath, callback)
```

### Description
Function for downloading files via http.
Allows you to download files of any size.

It can also work synchronously. To do this, just add [`:wait()`](../thread/wait):
```
myhttp.DownloadFile(...):wait()
```

:::caution
This function has unlimited access to the file system.
:::

### Arguments
|Name |Type |Description |
--- | --- | ---
|*url*|`string`|Url to the file to download|
|*fileName*|`string`|The name of the file.|
|*gamePath*|`string`|The path to look for the files and directories in. See [this list](https://wiki.facepunch.com/gmod/File_Search_Paths) for a list of valid paths.|
|*callback*|`function`|The function that will be called when the file is downloaded. Arguments: <ul><li>`bool` **ok** - Has the file downloaded</li><li>`string / nil` **err** - Error description, if `ok == true`, then equals `nil` </li><li>`number` **size** - File size</li></ul>|

### Returns
1. Returns [**Thread**](../thread) object.

### Example
Downloads the Firefox browser installer to the `data` folder
```lua
local url = 'https://download.mozilla.org/?product=firefox-stub&os=win&lang=ru'
myhttp.DownloadFile(url, 'firefox_installer.exe', 'DATA', function(ok, err, size)
    print(ok, err, size)
end)
-- Output: true nil 320296
```