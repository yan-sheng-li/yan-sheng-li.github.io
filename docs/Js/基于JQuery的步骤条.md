# 基于JQuery的步骤条

![image-20240719183156632](http://cdn.qiniu.liyansheng.top/img/image-20240719183156632.png)

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
    <link href="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css" rel="stylesheet"
        type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js"
        type="text/javascript"></script>

    <!-- <link rel="stylesheet" href="smart_wizard_arrows.css"> -->
</head>

<body>
    <!-- SmartWizard html -->
    <div id="smartwizard">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="#step-1">
                    <div class="num">1</div>
                    第一步 填写路线信息
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#step-2">
                    <span class="num">2</span>
                    第二步 选取景点
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#step-3">
                    <span class="num">3</span>
                    第三步 图集
                </a>
            </li>
        </ul>

        <form>
            <div class="tab-content">
                <div id="step-1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">
                    Step content
                </div>
                <div id="step-2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
                    Step content
                </div>
                <div id="step-3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
                    Step content
                </div>
            </div>
        </form>

        <!-- Include optional progressbar HTML -->
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0"
                aria-valuemax="100"></div>
        </div>
    </div>
</body>
<script>
    $(function () {
        // SmartWizard initialize
        $('#smartwizard').smartWizard({
            theme: 'arrows',
            lang: { // Language variables for button
                next: '下一步',
                previous: '上一步'
            },  
            toolbar: {
                showNextButton: true, // show/hide a Next button
                showPreviousButton: true, // show/hide a Previous button
                position: 'bottom', // none|top|bottom|both
                extraHtml: `<button class="btn btn-success" onclick="onFinish()">提交</button>
                <button class="btn btn-secondary" onclick="onCancel()">取消</button>`
            }
        });
    });
</script>

</html>
```