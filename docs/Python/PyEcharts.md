# PyEcharts

## 官网

[https://pyecharts.org/#/zh-cn/intro](https://pyecharts.org/#/zh-cn/intro)

##　全案例演示

[https://pyecharts.org/#/zh-cn/demo_data](https://pyecharts.org/#/zh-cn/demo_data)

## 安装

```bash
pip install pyecharts
```

## 图表并列

> 可以使用iframe来嵌入别的页面文件

举例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>并列展示多个iframe</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        h1 {
            text-align: center;
        }

        .iframe-container {
            display: flex; /* 启用 Flexbox */
            justify-content: space-around; /* 子元素之间的间距均匀分布 */
            flex-wrap: wrap; /* 如果窗口宽度不足，允许换行 */
        }

        iframe {
            width: 45%; /* 每个 iframe 占据 45% 的宽度 */
            height: 500px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <h1>总页面</h1>
    <div class="iframe-container">
        <iframe src="customized_pie.html" title="文件1"></iframe>
        <iframe src="pie_position.html" title="文件2"></iframe>
              <iframe src="pie_position.html" title="文件2"></iframe>
              <iframe src="pie_position.html" title="文件2"></iframe>
    </div>
</body>
</html>

```

