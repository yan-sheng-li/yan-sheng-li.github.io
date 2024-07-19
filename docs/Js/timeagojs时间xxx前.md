# timeagojs时间xxx前

## 官网
[文档地址](https://github.com/hustcc/timeago.js/blob/master/README.md)

## 案例
![image-20240719181524250](http://cdn.qiniu.liyansheng.top/img/image-20240719181524250.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/timeago.js/4.0.2/timeago.min.js"></script>
</head>

<body>
    <h2>2024-02-12</h2>
    <h2 id="demo"></h2>
</body>
<script>
    document.getElementById('demo').innerText = timeago.format('2024-02-12', 'zh_CN')
</script>

</html>
```