# Pinia使用笔记

## 1️⃣ Pinia 简介

- Pinia 是 Vue.js 官方推荐的状态管理库（替代 Vuex）。
- 特点：
  - 轻量、直观。
  - 支持模块化。
  - 与 Composition API 深度集成。
  - TypeScript 友好。

------

## 2️⃣ 安装与配置

### 安装

```bash
npm install pinia
```

### 在 Vue 项目中使用

```javascript
// main.js 或 main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
```

------

## 3️⃣ 创建 Store

### 基本语法

```javascript
import { defineStore } from 'pinia'

// 创建一个 store
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Pinia Example'
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    setName(newName) {
      this.name = newName
    }
  }
})
```

**说明：**

- `state`：存放响应式数据。
- `getters`：计算属性，类似 Vuex 的 getters。
- `actions`：方法，可以同步或异步修改 state。

------

## 4️⃣ 在组件中使用 Store

```vue
<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from './stores/counter'

const counter = useCounterStore()
</script>
```

------

## 5️⃣ 响应式与监听

- **直接使用**：

```javascript
counter.count  // 响应式
```

- **使用 watch 监听**：

```javascript
import { watch } from 'vue'

watch(() => counter.count, (newVal, oldVal) => {
  console.log(`count 从 ${oldVal} 变成 ${newVal}`)
})
```

------

## 6️⃣ 插件和持久化（可选）

- 可以通过 `pinia-plugin-persistedstate` 实现本地存储持久化：

```bash
npm install pinia-plugin-persistedstate
import piniaPersist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPersist)
```

- 在 store 中启用持久化：

```javascript
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  persist: true
})
```

------

## 7️⃣ Pinia 使用示例合集

### 示例 1：异步获取数据

```javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null
  }),
  actions: {
    async fetchUser() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      this.userInfo = await res.json()
    }
  }
})
```

### 示例 2：多个 Store 组合

```javascript
// store/counter.js
export const useCounterStore = defineStore('counter', { state: () => ({ count: 0 }), actions: { increment() { this.count++ } } })

// store/todo.js
export const useTodoStore = defineStore('todo', { state: () => ({ list: [] }), actions: { addTodo(todo) { this.list.push(todo) } } })
```

组件中同时使用：

```javascript
const counter = useCounterStore()
const todo = useTodoStore()

counter.increment()
todo.addTodo('学习 Pinia')
```

