# 深入理解Vuex

> Vuex 是 Vue.js 的状态管理模式库，它提供了一种集中式存储应用中所有组件的状态的机制，并以相应的规则保证状态以一种可预测的方式发生变化。在这篇博客中，我们将深入探讨 Vuex 的四个核心概念：state、mutations、actions 和 getters，并了解它们如何协同工作来管理 Vue.js 应用的状态。

![](http://cdn.qiniu.liyansheng.top/img/20240624234740.png)
## 一、State：应用的状态存储

state 是 Vuex 的基本构件，它存储了应用的所有共享数据。可以将 state 想象成一个大的数据仓库，应用中的每个组件都可以访问和使用这个仓库中的数据。

示例：

在 store/index.js 中定义 state：

```javascript

const store = createStore({
  state() {
    return {
      count: 0
    };
  }
});
```
在组件中访问 state：

```vue

<template>
  <div>{{ count }}</div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>
```
## 二、Mutations：同步地更改状态

mutations 是唯一能够更改 Vuex 状态的方法。每个 mutation 都有一个字符串类型的事件类型和一个回调函数。这个回调函数接收 state 作为第一个参数。

如何理解：
可以把 mutations 看作是用于修改 state 的同步函数。

示例：

在 store/index.js 中定义 mutations：

```javascript

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
```
在组件中提交 mutations：

```vue

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};
</script>
```
## 三、Actions：处理异步操作

actions 与 mutations 类似，不同的是 actions 可以包含异步操作。actions 通过提交 mutations 来间接更改状态，而不是直接更改状态。

如何理解：
可以把 actions 看作是可以包含异步操作的函数，它们最终会通过 mutations 来改变状态。

示例：

在 store/index.js 中定义 actions：

```javascript

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  }
});
```
在组件中分发 actions：

```vue

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    }
  }
};
</script>
```
## 四、Getters：派生状态

getters 类似于 Vue 组件中的计算属性，它们用来从 state 中派生出一些状态。getters 可以用来过滤、计算或格式化 state 中的数据。

如何理解：
可以把 getters 看作是对 state 进行计算或处理后派生出的新的状态。

示例：

在 store/index.js 中定义 getters：

```javascript

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
```
在组件中使用 getters：

```vue

<template>
  <div>{{ doubleCount }}</div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  }
};
</script>
```
## 总结

通过结合使用 Vuex 的 state、mutations、actions 和 getters，我们可以有效地管理 Vue.js 应用的状态：

    State：存储应用中的状态数据。
    Mutations：定义同步操作以更改状态。
    Actions：定义可以包含异步操作的函数，最终通过 mutations 来更改状态。
    Getters：定义从 state 中派生出的新状态，用于对 state 进行计算或处理。

理解和掌握这四个核心概念，可以帮助你更好地使用 Vuex 来管理 Vue.js 应用的状态，使你的应用更加稳定和易于维护。