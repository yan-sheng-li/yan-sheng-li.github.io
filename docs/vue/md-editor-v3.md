# md-editor-v3

![图片](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)

> Markdown编辑器Vue3版本

官网地址：https://imzbf.github.io/md-editor-v3/zh-CN

## 安装

npm

```bash
npm install md-editor-v3
```

pnpm

```bash
pnpm add md-editor-v3
```

## 全局注册

在`main.js`

```js
// 使用文档：https://imzbf.github.io/md-editor-v3/zh-CN/demo/
import { MdEditor,MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const app = createApp(App)
app.component('MdEditor', MdEditor)
app.component('MdPreview', MdPreview)
```

## 使用

### 编辑

```vue
<template>
  <MdEditor v-model="text" />
</template>

<script setup>
import { ref } from 'vue';
const text = ref('Hello Editor!');
</script>
```

### 仅预览

```vue
<template>
  <MdPreview :id="id" :modelValue="text" />
</template>

<script setup>
import { ref } from 'vue';
const id = 'preview-only';
const text = ref('# Hello Editor');
</script>
```

-----------

更多用法请参考文档说明~