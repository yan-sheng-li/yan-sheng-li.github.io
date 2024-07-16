---
permalink: /Js/2
---
# sweetalert2
> 一个漂亮、响应迅速、可定制、可访问（WAI-ARIA）的JavaScript弹出框替代品零依赖
## 官网
[https://sweetalert2.github.io/](https://sweetalert2.github.io/)

![](http://cdn.qiniu.liyansheng.top/img/20240715170516.png)

## 使用案例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
    <div>
        <button onclick="demo()">测试</button>
    </div>
</body>
<script>
    function demo() {
        Swal.fire('测试！')
    }
</script>

</html>
```
![](http://cdn.qiniu.liyansheng.top/img/20240715170638.png)

::: tip
更多案例可参考官网
:::