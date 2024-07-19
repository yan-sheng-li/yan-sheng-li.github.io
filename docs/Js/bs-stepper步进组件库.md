# bs-stepper步进组件库
## 简介
> bs-stepper 是一个轻量级的 Bootstrap 步进组件库，用于创建分步表单。
## 官网
[https://github.com/Johann-S/bs-stepper](https://github.com/Johann-S/bs-stepper)
## 效果
![image-20240719180503932](http://cdn.qiniu.liyansheng.top/img/image-20240719180503932.png)

## 参考
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bs-stepper Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bs-stepper/dist/css/bs-stepper.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
    <div id="stepper" class="bs-stepper">
        <div class="bs-stepper-header" role="tablist">
            <div class="step" data-target="#step-1">
                <button type="button" class="step-trigger" role="tab" id="step-1-trigger" aria-controls="step-1">
                    <span class="bs-stepper-circle">1</span>
                    <span class="bs-stepper-label">Step 1</span>
                </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#step-2">
                <button type="button" class="step-trigger" role="tab" id="step-2-trigger" aria-controls="step-2">
                    <span class="bs-stepper-circle">2</span>
                    <span class="bs-stepper-label">Step 2</span>
                </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#step-3">
                <button type="button" class="step-trigger" role="tab" id="step-3-trigger" aria-controls="step-3">
                    <span class="bs-stepper-circle">3</span>
                    <span class="bs-stepper-label">Step 3</span>
                </button>
            </div>
        </div>
        <div class="bs-stepper-content">
            <div id="step-1" class="content" role="tabpanel" aria-labelledby="step-1-trigger">
                <h3>Step 1</h3>
                <p>Content for step 1.</p>
                <button class="btn btn-primary" onclick="stepper.next()">Next</button>
            </div>
            <div id="step-2" class="content" role="tabpanel" aria-labelledby="step-2-trigger">
                <h3>Step 2</h3>
                <p>Content for step 2.</p>
                <button class="btn btn-primary" onclick="stepper.previous()">Previous</button>
                <button class="btn btn-primary" onclick="stepper.next()">Next</button>
            </div>
            <div id="step-3" class="content" role="tabpanel" aria-labelledby="step-3-trigger">
                <h3>Step 3</h3>
                <p>Content for step 3.</p>
                <button class="btn btn-primary" onclick="stepper.previous()">Previous</button>
                <button class="btn btn-success">Finish</button>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bs-stepper/dist/js/bs-stepper.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        window.stepper = new Stepper(document.querySelector('#stepper'));
    });
</script>

</body>
</html>

```