# Jodit富文本编辑器

## 官网
[https://xdsoft.net/jodit/](https://xdsoft.net/jodit/)

## 效果
![](http://cdn.qiniu.liyansheng.top/img/20240720002029.png)

## 案例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/jodit@4.0.1/es2021/jodit.min.css" />
    <script src="https://unpkg.com/jodit@4.0.1/es2021/jodit.min.js"></script>
</head>

<body>
    <div id="demo" style="width: 800px;height: 400px;">
        <textarea id="editor" name="editor"></textarea>
    </div>
</body>
<script>
    const editor = Jodit.make('#editor', {
        // 配置文件上传器的选项
        uploader: {
            url: '/upload', // 文件上传的URL
            format: 'json', // 服务器返回的数据格式
            method: 'POST', // 文件上传的HTTP方法
            error: function (response) {
                // 文件上传错误处理函数
                console.error('图片上传出错！', response);
            }
        },
    });
    
    editor.value = '<p>start</p>';

</script>

</html>
```