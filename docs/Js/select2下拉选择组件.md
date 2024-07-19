# select2下拉选择组件

## 官网
[https://select2.org/](https://select2.org/)

## 基础用法

![](http://cdn.qiniu.liyansheng.top/img/20240720003102.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

</head>

<body>
    <div>
        <!-- 单选 -->
        <select class="js-example-basic-single" name="state">
            <option value="AL">Alabama</option>
            <option value="WY">Wyoming</option>
        </select>
    </div>
    <div>
        <!-- 多选 -->
        <select class="js-example-basic-multiple" name="states[]" multiple="multiple">
            <option value="AL">Alabama</option>
            <option value="WY">Wyoming</option>
        </select>
    </div>

</body>
<script>
    $(document).ready(function () {
        $('.js-example-basic-single').select2();
        $('.js-example-basic-multiple').select2();
    });
</script>

</html>

```

## 调用远程数据

![](http://cdn.qiniu.liyansheng.top/img/20240720003157.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select2 远程数据源示例</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>
</head>
<body>

<select id="remoteSelect" style="width: 300px;">
    <option value="">Select a country</option>
</select>

<script>
$(document).ready(function() {
    $('#remoteSelect').select2({
        ajax: {
            url: 'https://api.example.com/countries', // 远程数据源的 URL
            dataType: 'json',
            delay: 250,
            processResults: function(data) {
                return {
                    results: $.map(data, function(obj) {
                        return { id: obj.value, text: obj.name }; // 使用 value 作为选项的值，name 作为显示的文本
                    })
                };
            },
            cache: true
        },
        minimumInputLength: 1 // 最小输入字符数触发 AJAX 请求
    });
});
</script>

</body>
</html>
```

## js渲染

![](http://cdn.qiniu.liyansheng.top/img/20240720003329.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select2 一次性加载远程数据源示例</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>
</head>
<body>

<select id="remoteSelect" style="width: 300px;">
    <option value="">Select a country</option>
</select>

<script>
$(document).ready(function() {
    // 假设你的数据源已经加载到一个名为 countries 的数组中
    var countries = [
        { id: 1, text: 'Country 1' },
        { id: 2, text: 'Country 2' },
        { id: 3, text: 'Country 3' },
        // 其他国家数据...
    ];

    // 使用 data 属性将数据加载到 Select2 中
    $('#remoteSelect').select2({
        data: countries
    });
});
</script>

</body>
</html>
```