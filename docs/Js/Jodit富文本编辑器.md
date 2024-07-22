# Jodit富文本编辑器

## 介绍

> Jodit Editor是一款出色的所见即所得编辑器，使用纯TypeScript编写，无需使用其他库。它包括一个文件编辑器和图像编辑器。

官网：[https://xdsoft.net/jodit/](https://xdsoft.net/jodit/)

![image-20240409000620687](http://cdn.qiniu.liyansheng.top/typora/image-20240409000620687.png)

## 用法

> 使用很是方便，导入两个文件即可。

```html
    <link rel="stylesheet" href="https://unpkg.com/jodit@4.0.1/es2021/jodit.min.css" />
    <script src="https://unpkg.com/jodit@4.0.1/es2021/jodit.min.js"></script>
```

定义个放置的容器：

```html
    <div id="demo" style="width: 800px;height: 400px;">
        <textarea id="editor" name="editor" ></textarea>
    </div>
```

初始化：

```js
    const editor = Jodit.make('#editor');
    editor.value = '<p>start</p>';
```

:💪然后效果就出来了，如下：

![image-20240408231459075](http://cdn.qiniu.liyansheng.top/typora/image-20240408231459075.png)

插入素材也很方便

![image-20240408234708195](http://cdn.qiniu.liyansheng.top/typora/image-20240408234708195.png)

## 完整案例

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
        <textarea id="editor" name="editor" ></textarea>
    </div>
</body>
<script>
    const editor = Jodit.make('#editor');
    editor.value = '<p>start</p>';
</script>

</html>
```

> 补充：如果需要自定义上传文件路径，可以在初始化时添加以下配置：

```js
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
```

效果如下：

![image-20240409000332380](http://cdn.qiniu.liyansheng.top/typora/image-20240409000332380.png)

更多配置和用法请移步官网查阅。[👉直达](https://xdsoft.net/jodit/)
