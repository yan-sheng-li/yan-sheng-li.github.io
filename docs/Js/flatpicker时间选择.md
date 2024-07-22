# flatpicker时间选择
## 官网

> flatpicker是一个轻量级且功能强大的日期时间选择器。

精益、用户体验驱动和可扩展，但它不依赖于任何库。用户界面很少，但主题很多。丰富、公开的API和事件系统使其适用于任何环境。

[https://flatpickr.js.org/](https://flatpickr.js.org/)

## 依赖

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
```

可选：

```html
<script src="https://cdn.staticfile.net/jquery/1.10.2/jquery.min.js"></script>>
```

## 用法

```html
<div class="mb-3">
    <label for="rentalStart" class="form-label">起租时间</label>
    <input type="text" class="form-control" required name="rentalStart" id="rentalStart"
      placeholder="请输入您的起租时间">
</div>
```

```js
        $(function () {
            flatpickr("#rentalStart", {
                enableTime: true,
                enableSeconds: true,
                dateFormat: "Y-m-d H:i:S",
            });
        })
```

效果：

![image-20240404000142342](http://cdn.qiniu.liyansheng.top/typora/image-20240404000142342.png)

::: warning
后端在接收参数时注意数据类型
:::


这里我数据库字段类型是`datetime`

那与之映射的实体，我们要这样写：

```java
@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
private LocalDateTime rentalStart;
```

在controller接收请求传来的参数时，需要给实体重新赋值：


```java
    @PostMapping
    @ResponseBody
    public SaResult order(Order order) {
        // ........
        LocalDateTime rentalStart = order.getRentalStart();
        order.setRentalStart(rentalStart);
		// .......
        return SaResult.ok();
    }
```

❤这样我们就能将传来的时间保存到数据库了