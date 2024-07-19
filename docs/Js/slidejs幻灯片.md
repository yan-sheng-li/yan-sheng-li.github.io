---
permalink: /Js/3
---
# slidejs幻灯片
> Splite是一个用TypeScript编写的轻量级、灵活且可访问的滑块/转盘。没有依赖关系，没有Lighthouse错误。
## 官网
[https://splidejs.com/](https://splidejs.com/)

![](http://cdn.qiniu.liyansheng.top/img/20240715171420.png)

## 案例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SlideJS 示例</title>
    <!-- 引入 jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- 引入 SlideJS 库文件 -->
    <script src=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js "></script>
    <!-- SlideJS 样式 -->
    <link href=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css " rel="stylesheet">

</head>

<body>

    <!-- 幻灯片容器 -->
    <div class="splide" role="group" aria-label="Splide Basic HTML Example">
        <div class="splide__track">
            <ul class="splide__list">
                <li class="splide__slide">
                    <img src="https://k.sinaimg.cn/n/sinacn11/486/w640h646/20181015/2c53-hmhhnqs5002877.jpg/w700d1q75cms.jpg"
                        alt="">
                </li>
            </ul>
        </div>
    </div>

    <!-- 初始化 SlideJS -->
    <script>
        $(document).ready(function () {
            new Splide('.splide').mount();
        });
    </script>

</body>

</html>
```

::: tip
更多案例可参考官网
:::
