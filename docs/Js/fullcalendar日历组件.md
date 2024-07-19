# fullcalendar日历组件
## 官网

[https://fullcalendar.io/](https://fullcalendar.io/)

## 效果

![image-20240719173642043](http://cdn.qiniu.liyansheng.top/img/image-20240719173642043.png)

## 参考
```html
<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='utf-8' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.global.min.js'></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                // 添加事件
                events:[
                    {
                        title:'测试',
                        start:'2024-04-27'
                    }
                ]
            });
            calendar.render();
        });
    </script>
</head>
<body>
    <div style="display: flex;justify-content: center;">
        <div id='calendar' style="width: 50%;"></div>
    </div>
</body>

</html>
```