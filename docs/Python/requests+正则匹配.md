# requests+正则匹配

## 示例
```python
import re
import requests

# 抓取目标url的侧导航栏
index_url = 'https://www.liyansheng.top/project/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0'
}

if __name__ == '__main__':
    res_data = requests.get(index_url, headers=headers).text
    url=re.findall('<a href="(.*?)" class="sidebar-link">.*?</a>',res_data)
    result = re.findall('<a href=".*?" class="sidebar-link">(.*?)</a>', res_data)
    for e in url:
        print('https://www.liyansheng.top'+e)
```

![](http://cdn.qiniu.liyansheng.top/img/20241222151706.png)


## 正则解释
如：
```python
title = re.findall('<h1>(.*?)</h1>', res_data)
```
(.*?)：这是一个捕获组，其中：

- `.`表示匹配除换行符之外的任意字符。
- `*`表示前面的字符（这里就是`.`所代表的任意字符）可以出现零次或多次。
- `?`是一个非贪婪（或叫懒惰）限定符，它使得`*`的匹配尽可能少的字符，而不是默认的尽可能多的字符。在这里就是匹配`<h1>`和`</h1>`之间的内容，一旦遇到`</h1>`就停止匹配该捕获组内的内容了，这样能精准获取到我们想要的`<h1>`标签内的文本。

