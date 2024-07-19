# FullPagejs图片全面屏网页

## 官网
[https://alvarotrigo.com/fullPage/](https://alvarotrigo.com/fullPage/)

## 示例

![image-20240719182807981](http://cdn.qiniu.liyansheng.top/img/image-20240719182807981.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FullPage.js Example</title>
    <!-- 引入jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- 引入fullPage.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
    <!-- 引入fullPage.js的CSS文件 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css">
    <style>
        /* 自定义样式 */
        .section {
            text-align: center;
            position: relative;
            /* 为了相对定位 */
            background-size: cover;
            /* 调整背景图像以填充整个区域 */
            background-position: center;
            /* 将背景图像居中 */
        }

        .slide {
            text-align: center;
            position: relative;
            /* 为了相对定位 */
            background-size: cover;
            /* 调整背景图像以填充整个区域 */
            background-position: center;
            /* 将背景图像居中 */
        }

        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
        }

        /* 导航菜单样式 */
        #navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #333;
            padding: 10px 0;
            z-index: 1000;
        }

        #navbar ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            max-width: 960px;
        }

        #navbar li {
            display: inline-block;
            margin-right: 20px;
        }

        #navbar a {
            color: white;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <nav id="navbar">
        <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
            <li><a href="#section4">Section 4</a></li>
            <li><a href="#section4/1">Section 5</a></li>
        </ul>
    </nav>
    <div id="fullpage">
        <div class="section" id="section1"
            style="background-image: url('https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/0C/09/Cg-4WVSBfl-IanN7AC__cIPrv8EAAR5PQMDkT8AL_-I272.jpg');">
            <div class="content">
                <h2>Section 1</h2>
                <p>This is the content of section 1.</p>
            </div>
        </div>
        <div class="section" id="section2"
            style="background-image: url('https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/08/ChMkJ1bKzFWIZlBXAD2We1G9mDsAALI1QAOSgkAPZaT215.jpg');">
            <div class="content">
                <h2>Section 2</h2>
                <p>This is the content of section 2.</p>
            </div>
        </div>
        <div class="section" id="section3"
            style="background-image: url('https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/08/ChMkJlbKzFWIZNvSABBYF9awqNAAALI1QDmg-YAEFgv220.jpg');">
            <div class="content">
                <h2>Section 3</h2>
                <p>This is the content of section 3.</p>
            </div>
        </div>
        <div class="section" id="section4">
            <div class="slide"
                style="background-image: url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600');">
                <h1>Smple Demo</h1>
            </div>
            <div class="slide"
                style="background-image: url('https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&w=600');">
                <h1>Only text</h1>
            </div>
        </div>
    </div>

    <script>
        // 初始化fullPage.js
        $(document).ready(function () {
            $('#fullpage').fullpage({
                // 滚动速度
                scrollingSpeed: 1000,
                // 自动滚动
                autoScrolling: true,
                // 锚点
                anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
                // 导航条
                navigation: true,
                // 导航条位置
                navigationPosition: 'right',
                // 控制箭头
                controlArrows: true,
                // 水平循环
                loopHorizontal: true,
                // 键盘滚动
                keyboardScrolling: true,
                // 垂直居中
                verticalCentered: true,
                // 分段颜色
                sectionsColor: ['#f2f2f2', '#e6e6e6', '#cccccc'],
                // 响应式宽度
                responsiveWidth: 768,
                // 响应式高度
                responsiveHeight: 0,
                // 滚动溢出
                scrollOverflow: true
            });
        });

    </script>
</body>

</html>
```