# 单html页面-elementUI-案例
![image-20240719182628086](http://cdn.qiniu.liyansheng.top/img/image-20240719182628086.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
</head>

<body>
    <div id="app">
        <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>

                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-menu-item>
            <el-menu-item>
                <el-button type="primary" size="default" @click="">登录</el-button>
                
            </el-menu-item>
            <el-button type="primary" size="default" @click="">登录</el-button>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>


        <el-button @click="visible = true">Button</el-button>
        <el-button type="danger" size="default" @click="">删除</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element</p>
        </el-dialog>

        <el-divider direction="horizontal" content-position="left"></el-divider>
        <el-row :gutter="20">
            <el-col :span="12" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <div slot="header">
                        <span><!-- card title --></span>
                    </div>
                    <el-empty></el-empty>
                </el-card>
            </el-col>
            <el-col :span="12" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <div slot="header">
                        <span><!-- card title --></span>
                    </div>
                    <el-empty></el-empty>
                </el-card>
            </el-col>
        </el-row>

        <el-calendar v-model="value">
        </el-calendar>
    </div>
</body>
<script>
    new Vue({
        el: '#app',
        data() {
            return {
                visible: false,
                value: new Date()
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    })
</script>

</html>
```