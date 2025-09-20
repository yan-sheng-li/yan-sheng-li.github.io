# Vue2 与 Vue3 混用问题

## 1. 是否能混用？

- uni-app 创建项目时选择 **Vue2 或 Vue3** 会决定运行时，二者不能直接混用。
- 但 Vue3 兼容大部分 **Vue2 的 Options API**，所以你可以继续用 Vue2 风格写法。
- Vue2 独有的 API（如 `beforeDestroy`、`filters`、`$on` 等）在 Vue3 中已被移除或替换。

------

## 2. Vue2 与 Vue3 常见对照表

### 生命周期

| Vue2          | Vue3                     |
| ------------- | ------------------------ |
| created       | created（仍支持）/ setup |
| beforeMount   | beforeMount              |
| mounted       | mounted                  |
| beforeUpdate  | beforeUpdate             |
| updated       | updated                  |
| beforeDestroy | ❌ → beforeUnmount        |
| destroyed     | ❌ → unmounted            |

------

### 数据与逻辑

| 功能     | Vue2 写法                                        | Vue3 写法                                      |
| -------- | ------------------------------------------------ | ---------------------------------------------- |
| data     | `data() { return { count: 0 } }`                 | `const count = ref(0)`                         |
| computed | `computed: { double() { return this.count*2 } }` | `const double = computed(() => count.value*2)` |
| watch    | `watch: { count(v) { ... } }`                    | `watch(count, v => { ... })`                   |
| methods  | `methods: { add() { this.count++ } }`            | `const add = () => { count.value++ }`          |

------

### 组件与选项

- `components` ✅
- `props` ✅
- `emits` ✅
- `provide / inject` ✅
- `mixins` ✅
- `extends` ✅
- `filters` ❌ （已移除）
- `inheritAttrs` ✅
- `directives` ✅

------

## 3. Vue3 中的 `props` 用法

### Options API

```vue
<script>
export default {
  props: {
    title: String,
    count: Number
  }
}
</script>
```

### Composition API (`setup`)

```vue
<script setup>
defineProps({
  title: String,
  count: Number
})
</script>
```


------

## 4. 小结

- Vue3 仍支持大部分 Vue2 的 Options API，迁移成本低。
- 生命周期有少量改名（`beforeDestroy → beforeUnmount`，`destroyed → unmounted`）。
- 部分 API 移除（`filters`、`$on` 等）。
- Vue3 推荐 **Composition API**（`setup` + `ref` + `reactive` 等），更灵活。
- 在 uni-app 中，Vue2 的页面生命周期（如 `onLoad`、`onShow`）仍然保留，Vue2/3 都能用。