# vue-toastification
> `vue-toastification` 是一个轻量级、高度可定制的 Toast 通知插件，适用于 Vue 2 和 Vue 3。以下是它在 **Vue 2 项目**中的详细使用指南：



### **1. 安装**

```
npm install vue-toastification@2
# 或
yarn add vue-toastification@2
```

> 注意：Vue 2 需要安装 `@2.x` 版本，Vue 3 使用最新版。



### **2. 基本使用**

#### **2.1 全局注册**

在入口文件（如 `main.js`）中引入并配置：

```
import Vue from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'; // 引入默认样式

// 可选配置
const options = {
  timeout: 3000, // 默认显示时长（毫秒）
  position: 'top-right', // 位置：top-right | top-left | bottom-right | bottom-left
};

Vue.use(Toast, options);
```

#### **2.2 在组件中使用**

通过 `this.$toast` 调用：

```
export default {
  methods: {
    showToast() {
      // 基础用法
      this.$toast.success('操作成功！');
      this.$toast.error('发生错误！');
      this.$toast.info('这是一个提示');
      this.$toast.warning('警告内容');

      // 自定义选项（覆盖全局配置）
      this.$toast('自定义内容', {
        type: 'default', // default | success | error | info | warning
        timeout: 5000,
        position: 'bottom-left',
      });
    },
  },
};
```



### **3. 高级用法**

#### **3.1 自定义 HTML 内容**

```
this.$toast('<strong>加粗文本</strong><br>支持 HTML', {
  timeout: false, // 不自动关闭
  closeOnClick: false, // 点击不关闭
});
```

#### **3.2 手动关闭 Toast**

```
const toastId = this.$toast('点击按钮关闭我');
this.$toast.dismiss(toastId); // 关闭指定 Toast
this.$toast.clear(); // 关闭所有 Toast
```

#### **3.3 全局配置覆盖**

```
// 在初始化时配置
Vue.use(Toast, {
  transition: 'Vue-Toastification__bounce', // 动画效果
  maxToasts: 3, // 最大同时显示数量
  closeButton: false, // 隐藏关闭按钮
  // 更多配置见官方文档
});
```



### **4. 在 Composition API 中使用**

如果项目使用了 `@vue/composition-api`，可以通过 `useToast`：

```
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const toast = useToast();
    toast.success('Composition API 调用！');
    return {};
  },
};
```



### **5. 样式自定义**

#### **5.1 覆盖默认样式**

在 CSS 文件中修改变量：

```
:root {
  --vt-color-success: #4caf50;
  --vt-text-color-success: #fff;
  --vt-toast-min-width: 300px;
}
```

#### **5.2 使用 SCSS**

```
// 在 vue.config.js 中确保 sass-loader 配置正确
@import '~vue-toastification/src/scss/_variables';
@import '~vue-toastification/src/scss/_toastContainer';
@import '~vue-toastification/src/scss/_toast';
@import '~vue-toastification/src/scss/_closeButton';
```



### **6. 常见问题**

- **按需引入**：默认会打包所有样式，如需按需加载，参考官方文档的 [Tree-Shaking 指南](https://github.com/Maronato/vue-toastification#tree-shaking)。
- **TypeScript 支持**：自带类型定义，无需额外安装。
- **Nuxt.js 集成**：需通过 Nuxt 的插件机制封装，参考 [官方示例](https://github.com/Maronato/vue-toastification/issues/1#issuecomment-595990783)。



### **官方文档**

- GitHub: https://github.com/Maronato/vue-toastification
- 所有配置项: [Options 文档](https://github.com/Maronato/vue-toastification/blob/master/docs/index.md#toastoptions)

通过以上步骤，你可以快速集成一个美观且功能强大的 Toast 通知系统！