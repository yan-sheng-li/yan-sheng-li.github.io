# driverjs页面引导
## 官网
[https://driverjs.com/](https://driverjs.com/)

## 演示
![image-20240719182436500](http://cdn.qiniu.liyansheng.top/img/image-20240719182436500.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.js.iife.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.css" />
</head>

<body>
    <button id="startBtn" onclick="helpMe()">引导我</button>
    <div id="one">
        <h1>步骤1</h1>
    </div>
    <div id="two">
        <h1>步骤2</h1>
    </div>
</body>
<script>
    const driver = window.driver.js.driver;
    function helpMe() {
        const driverObj = driver({
            animate: true,
            overlayColor: 'orange',
            showButtons: ['next', 'previous', 'close'],
            prevBtnText: '上一步',
            nextBtnText: '下一步',
            doneBtnText: '结束引导',
            popoverClass: 'driverjs-theme',
            allowClose: true,
            // 是否自动滚动以使高亮元素可见
            scrollIntoViewOptions: {
                behavior: 'smooth',
                block: 'center'
            },
            steps: [
                {
                    element: '#one',
                    popover: {
                        title: '步骤1',
                        description: '你可以xxxxxxxxxxx'
                    }
                }, {
                    element: '#two',
                    popover: {
                        title: '步骤2',
                        description: '你可以xxxxxxxxxxx'
                    }
                }
            ]
        });
        driverObj.drive();
    }
</script>

</html>
```