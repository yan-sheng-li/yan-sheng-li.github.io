> `vuex-persistedstate` 是一个用于 **持久化 Vuex 状态** 的插件，可以将 Vuex 中的数据自动保存到本地存储（如 `localStorage` 或 `sessionStorage`），防止页面刷新后数据丢失。以下是它在 **Vue 2 项目**中的详细使用指南：

------

## **1. 安装**

```
npm install vuex-persistedstate
# 或
yarn add vuex-persistedstate
```

------

## **2. 基本使用**

### **2.1 在 Vuex Store 中引入**

在 `store/index.js`（或你的 Vuex 配置文件）中引入并配置：

```
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: '',
    theme: 'light',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
  plugins: [
    // 默认使用 localStorage 存储所有 state
    createPersistedState(),
  ],
});
```

### **2.2 测试效果**

- 在 Vue 组件中修改 Vuex 状态：

  ```
  this.$store.commit('setUser', { name: 'John' });
  this.$store.commit('setToken', 'abc123');
  ```

- 

  刷新页面

  ，检查 

  ```
  localStorage
  ```

  （开发者工具 → Application → Local Storage），会发现数据已被保存：

  ```
  {
    "user": { "name": "John" },
    "token": "abc123",
    "theme": "light"
  }
  ```

- 重新加载页面后，Vuex 会自动从 `localStorage` 恢复数据。

------

## **3. 高级配置**

### **3.1 只持久化部分 state**

如果不想保存全部 state，可以指定 `paths`：

```
createPersistedState({
  paths: ['user', 'token'], // 只保存 user 和 token
}),
```

### **3.2 使用 sessionStorage**

默认使用 `localStorage`，如果想改用 `sessionStorage`：

```
createPersistedState({
  storage: window.sessionStorage,
}),
```

### **3.3 自定义存储 key**

默认存储 key 是 `vuex`，可以修改：

```
createPersistedState({
  key: 'my-app-vuex', // localStorage 中的 key 会变成 "my-app-vuex"
}),
```

### **3.4 数据加密（可选）**

如果需要加密存储的数据，可以使用 `secure-ls`：

```
npm install secure-ls
import SecureLS from 'secure-ls';
const ls = new SecureLS({ encodingType: 'aes' });

createPersistedState({
  storage: {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key),
  },
}),
```

### **3.5 数据过滤（不存储某些数据）**

```
createPersistedState({
  reducer: (state) => {
    const { token, ...persistedState } = state; // 不存储 token
    return persistedState;
  },
}),
```

------

## **4. 常见问题**

### **4.1 数据未更新？**

- 确保 `mutations` 正确触发，并且 `createPersistedState` 在 `plugins` 数组中。
- 检查 `localStorage` 是否被浏览器禁用（如隐私模式）。

### **4.2 如何清除存储的数据？**

```
// 手动清除 localStorage 中的 Vuex 数据
localStorage.removeItem('vuex'); // 或自定义的 key
// 或
this.$store.replaceState({}); // 重置 Vuex 状态
```

### **4.3 兼容 SSR（如 Nuxt.js）**

在 SSR 环境下（如 Nuxt.js），`window` 对象不存在，需要动态引入：

```
// 仅在客户端使用
if (process.client) {
  const createPersistedState = require('vuex-persistedstate').default;
  store.plugins.push(createPersistedState());
}
```

------

## **5. 官方文档**

- GitHub: https://github.com/robinvdvleuten/vuex-persistedstate
- 更多配置选项：`createPersistedState(options)`

------

## **总结**

| 功能                    | 配置方式                            |
| ----------------------- | ----------------------------------- |
| **基本存储**            | `createPersistedState()`            |
| **只存储部分 state**    | `paths: ['user', 'token']`          |
| **改用 sessionStorage** | `storage: window.sessionStorage`    |
| **自定义 key**          | `key: 'my-custom-key'`              |
| **加密存储**            | 结合 `secure-ls`                    |
| **数据过滤**            | `reducer: (state) => filteredState` |

通过 `vuex-persistedstate`，你可以轻松实现 Vuex 数据的持久化，提升用户体验！ 🚀