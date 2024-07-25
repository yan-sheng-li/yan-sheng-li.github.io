# 自定义axios

> 在 Vue 项目中自定义 axios 可以让你更方便地处理 HTTP 请求，统一管理请求的配置和错误处理
## 安装
```bash
npm install axios
```

## 案例

```js
import axios from 'axios';

import router from '../router';

// 创建一个 Axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:8081/', // 设置统一的请求前缀
  timeout: 10000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json', // 设置请求头为 JSON
    // 可以添加其他默认的请求头
  }
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送之前做些什么，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // console.log("响应拦截", response);
    // 假设服务端返回的数据格式中有 code 字段表示状态码
    const { code } = response.data;
    if (code === 401) {
      // 处理未授权的情况，例如跳转到登录页
      // 在 Vue Router 中可以使用 this.$router.push('/login') 进行路由跳转
      // console.error('未授权：', message);
      // 示例：跳转到登录页
      router.push('/login');
      return Promise.reject(response);
    }
    return response.data; // 返回响应数据
  },
  error => {
    // 对响应错误做点什么
    // console.error('响应错误：', error);
    return Promise.reject(error); // 返回错误信息，继续抛出
  }
);

export default instance;
```

## 挂载
```js
// src/main.js
import Vue from 'vue';
import App from './App.vue';
import axios from './axios'; // 引入自定义的 axios 实例

Vue.config.productionTip = false;

// 直接将 axios 实例挂载到 Vue 原型上
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app');
```
这样，axios 实例会被挂载到 Vue 的原型上，所有组件都可以通过 this.$axios 来访问。