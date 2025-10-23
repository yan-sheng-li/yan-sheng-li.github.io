# easy-qrcodejs生成二维码

![](http://cdn.qiniu.liyansheng.top/img/20251023123149.png)

## 用法示例
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>带Logo二维码测试</title>

    <!-- 引入 Easy-QRCodeJS -->
    <script src="https://cdn.jsdelivr.net/npm/easyqrcodejs@4.4.5/dist/easy.qrcode.min.js"></script>

    <style>
        body {
            text-align: center;
            font-family: "Microsoft YaHei", sans-serif;
            margin-top: 50px;
        }
    </style>
</head>
<body>

<h2>二维码中间带Logo测试</h2>

<!-- 二维码容器 -->
<div id="taobao-qrcode"></div>

<script>
    // 测试链接（可改成你的淘宝链接）
    const taobaoLink = "https://www.liyansheng.top/";

    // 生成二维码
    const qrcode = new QRCode(document.getElementById("taobao-qrcode"), {
        text: taobaoLink,
        width: 200,
        height: 200,

        // 中心 Logo
        logo: "http://cdn.qiniu.liyansheng.top/img/graphic-4005286_640.png",   // ← 请把 logo.png 加进同目录
        logoWidth: 50,
        logoHeight: 50,

        correctLevel: QRCode.CorrectLevel.H // 高容错
    });
</script>

</body>
</html>
```

## ✅ 重要注意点（非常关键）

### **1. 在线资源必须是 HTTPS**

否则在 https 页面会被浏览器拦截 (`Mixed Content`)

### ✅ OK

```
https://abc.com/logo.png
```

### ❌ NO

```
http://abc.com/logo.png
```

------

### **2. Logo 必须允许跨域（CORS）**

否则浏览器会报：

```
Failed to execute 'toDataURL' on 'HTMLCanvasElement'
```

如果你仅用于显示 → 没影响
 如果你要**生成图片导出** → 必须允许 CORS

------

### **3. 不要用很大的图片**

建议 200px × 200px 左右
 更大也可以，库会自动缩放

------

## ✅ 你可以直接用阿里 OSS、七牛、imgur、github raw 图

例如 Github Raw 图：

```
logo: "https://raw.githubusercontent.com/.../logo.png"
```

也完全能显示。