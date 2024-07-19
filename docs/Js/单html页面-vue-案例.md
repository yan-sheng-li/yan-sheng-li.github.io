# 单html页面-vue-案例
![image-20240719182351251](http://cdn.qiniu.liyansheng.top/img/image-20240719182351251.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue-demo</title>
    <!-- 开发环境版本，包含命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <!-- vue对象 -->
        <h1>测试：{{msg}}</h1>
        <h2 v-text="msg"></h2>
        <button @click="show">测试</button>
        <button @click="add">新增数据</button>
        <button @click="demo(123)">测试</button>
        <input type="text" v-model="name">
        <h2>你的输入是：{{name}}</h2>
        <!-- 使用v-bind绑定src属性 -->
        <img :src="avatar" alt="" v-if="isOk">
        <ul :key="s.id" v-for="s in stu">
            <li>{{s.id}}</li>
            <li>{{s.name}}</li>
        </ul>
        
    </div>
</body>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            id:5,
            msg: 'hello',
            isOk:false,
            name: 'li',
            // 注意这里将src属性绑定到avatar数据属性上
            avatar: 'https://pic1.zhimg.com/50/v2-139627556961d50c4f9b27badce0b99e_720w.jpg?source=1def8aca',
            stu:[
                {"id":1,"name":'张三'},{"id":2,"name":'李四'},
            ]
        },
        methods: {
            show() {
                alert()
            },
            demo(msg) {
                alert(msg)
            },
            add(){
                this.stu.push({"id":Math.random(),"name":'王五'});
            }
        },
        watch: {
            name(n, o) {
                console.log(o + '>>' + n);
            }
        }
    });

</script>
</html>

```