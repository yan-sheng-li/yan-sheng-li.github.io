# viewjs点击图片放大预览

## 效果

![](http://cdn.qiniu.liyansheng.top/img/20240720010755.png)

## 示例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--  图片预览-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.11.6/viewer.min.js"
        integrity="sha512-EC3CQ+2OkM+ZKsM1dbFAB6OGEPKRxi6EDRnZW9ys8LghQRAq6cXPUgXCCujmDrXdodGXX9bqaaCRtwj4h4wgSQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.11.6/viewer.css"
        integrity="sha512-eG8C/4QWvW9MQKJNw2Xzr0KW7IcfBSxljko82RuSs613uOAg/jHEeuez4dfFgto1u6SRI/nXmTr9YPCjs1ozBg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <h1>图片预览</h1>
    <img src="http://cdn.qiniu.liyansheng.top/img/20240720010657.png" id="images">
</body>
<Script>
    new Viewer(document.getElementById('images'));
</Script>

</html>
```